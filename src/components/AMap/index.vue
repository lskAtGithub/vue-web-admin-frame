<template>
  <div>
    <div class="search-box">
      <el-input class="ipt" id="inputId" v-model="keyword" placeholder="请输入具体位置" />
      <div id="outputId" class="output-container"></div>
    </div>
    <div class="map-container">
      <div
        ref="mapRef"
        id="mapContainer"
        class="map-element"
        :style="{
          width: props.width,
          height: props.height
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts" name="AMapComponents">
import { ref, onMounted, shallowRef, onUnmounted, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import AMapLoader from '@amap/amap-jsapi-loader'
import type { Ref } from 'vue'
import type {
  IMapPlugins,
  IClickMap,
  IAutoCompleteRes,
  IGeoCoderRes,
  IResult,
  IPlaceSearchRes
} from './map'

const plugins = [
  'AMap.Marker',
  'AMap.ToolBar',
  'AMap.AutoComplete',
  'AMap.PlaceSearch',
  'AMap.Geocoder'
]
let mapLoader: any = null

let keyword: Ref<string> = ref('')
let map: Ref<any> = shallowRef(null)
const mapRef = ref(null)
// 地图插件实例化对象
const mapPlugins: IMapPlugins = reactive({
  mapMarker: null,
  geoCoder: null,
  placeSearch: null
})

const props = defineProps({
  width: {
    type: String,
    default: () => '100%'
  },
  height: {
    type: String,
    default: () => '400px'
  },
  longitude: {
    type: [String, Number],
    default: () => '116.396938'
  },
  latitude: {
    type: [String, Number],
    default: () => '39.909321'
  },
  option: {
    type: Object,
    default: () => ({
      zoom: 13, // 地图级别, 最大值为 20.
      resizeEnable: true // 是否监控地图容器尺寸变化
    })
  }
})

// 设为地址
const setAddress = (result: IResult) => {
  closeInfoWindow()
  mapEmits('setAddress', result)
}

const initAMap = () => {
  const centerPosition = [Number(props.longitude), Number(props.latitude)]
  AMapLoader.load({
    key: import.meta.env.VITE_MAP_KEY,
    version: '2.0',
    plugins: plugins
  }).then((AMap) => {
    mapLoader = AMap
    map.value = new AMap.Map('mapContainer', {
      center: centerPosition,
      zoom: props.option.zoom,
      resizeEnable: props.option.resizeEnable
    })
    AMap.plugin(plugins, function () {
      // 工具条，控制地图的缩放、平移等
      const toolbar = new AMap.ToolBar({
        position: {
          top: '110px',
          right: '40px'
        }
      })
      map.value.addControl(toolbar)
      // 点标记
      mapPlugins.mapMarker = new AMap.Marker({
        position: centerPosition
      })
      map.value.addControl(mapPlugins.mapMarker)
      // 搜索
      const AutoComplete = new AMap.AutoComplete({ input: 'inputId', output: 'outputId' })
      mapPlugins.placeSearch = new AMap.PlaceSearch({
        map: map.value,
        autoFitView: true, // 是否自动调整地图视野使绘制的 Marker点都处于视口的可见范
        pageSize: 5, // 单页显示结果条数
        pageIndex: 1 // 页码
      })

      mapPlugins.geoCoder = new AMap.Geocoder({
        radius: 1000,
        extensions: 'all'
      })
      AMap.Event.addListener(AutoComplete, 'select', (checked: IAutoCompleteRes) => {
        mapPlugins.placeSearch.search(checked.poi.name, (status: string, res: IPlaceSearchRes) => {
          if (status) {
            const item = res?.poiList?.pois.filter((item) => item.name === checked.poi.name)[0]
            if (item) {
              const location = [item.location.lng, item.location.lat]
              mapPlugins.geoCoder.getAddress(location, function (status: string, data: IGeoCoderRes) {
                if (status === 'complete' && data.info === 'OK') {
                  const result = Object.assign(data.regeocode, { location: location })
                  mapPlugins.placeSearch.search(result.formattedAddress)
                  setInfoWindow(result)
                } else {
                  ElMessage.error('选择地址出错, 请重试')
                }
              })
            } else {
              ElMessage.error('未选择到具体的地址或未搜到地址信息')
              map.value.clearMap()
            }
          } else {
            ElMessage.error('请求有误， 请刷新重试')
          }
        })
      })
    })
    //为地图注册click事件获取鼠标点击出的经纬度坐标
    map.value.on('click', function (e: IClickMap) {
      const lng = e.lnglat.getLng()
      const lat = e.lnglat.getLat()
      const location = [lng, lat]
      mapPanTo(location)
    })
  })
}

const setInfoWindow = (result: IResult) => {
  map.value.clearMap()
  mapPlugins.mapMarker = null
  map.value.panTo(result.location)
  // 点标记
  mapPlugins.mapMarker = new mapLoader.Marker({
    position: result.location
  })
  map.value.addControl(mapPlugins.mapMarker)

  const content = `
    <div style="background: #fff;border-radius: 3px;width: 260px; font-size: 13px;padding-bottom: 20px;position: relative;box-shadow: 0 0 5px 0 #ccc;">
      <div style="border-bottom: 1px solid #ccc;padding: 7px 16px;display:flex;justify-content: space-between;align-items:center;">
        <span style="font-size: 15px;">当前位置</span>
        <img id="closeWindow" style="cursor: pointer;" src="https://webapi.amap.com/images/close2.gif" />
      </div>
      <div style="padding: 16px 8px; color: #666;">
        地址：${result.formattedAddress}
      </div>
      <div id="setAddress" style="user-select: none;width: 120px; margin: 0 auto; text-align: center;color: #fff;background: #027db4;padding: 6px 0;cursor: pointer;border-radius: 3px;">
        使用该地址
      </div>
      <div style="position: absolute; left: 115px; bottom: -26px;">
        <svg t="1689070613682" class="icon" viewBox="0 0 1369 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1507" width="20" height="40"><path d="M684.840764 1024L1369.681529 0H0z" p-id="1508" fill="#ffffff"></path></svg>
      </div>
    </div>
  `
  const infoWindow = new mapLoader.InfoWindow({
    content: content,
    isCustom: true,
    offset: new mapLoader.Pixel(5, -45)
  })
  infoWindow.open(map.value, mapPlugins.mapMarker.getPosition())

  // 绑定关闭事件
  document.getElementById('closeWindow')!.onclick = closeInfoWindow
  // 绑定使用该地址确认事件
  document.getElementById('setAddress')!.onclick = () => setAddress(result)
}

//关闭信息窗体
const closeInfoWindow = () => {
  map.value.clearInfoWindow()
}

// 地图选点显示对应的数据
const mapPanTo = (location: number[]) => {
  map.value.panTo(location)
  const position = new mapLoader.LngLat(location[0], location[1])
  mapPlugins.mapMarker.setPosition(position)
  mapPlugins.geoCoder.getAddress(location, function (status: string, data: IGeoCoderRes) {
    const result: IResult = { ...data.regeocode, ...{ location } }
    setInfoWindow(result)
    mapEmits('mapSelection', result)
  })
}

onMounted(() => {
  initAMap()
})
onUnmounted(() => {
  map && map.value.destroy()
})
const mapEmits = defineEmits(['mapSelection', 'setAddress'])
defineExpose({ initAMap })
</script>

<style scoped lang="scss">
.map-container {
  .map-element {
    margin: 12px 0;
    border: 1px solid #e7e7e7;
  }
}
.search-box {
  padding: 12px 0;
  position: relative;
}
:deep(.output-container) {
  width: 350px;
  position: absolute;
  z-index: 9999;
  background: #fff;
  box-shadow: 0 0 3px 0 #ccc;
  border-radius: 3px;
  .auto-item {
    padding: 8px 12px;
    font-size: 13px;
  }
}
.address-selector-box {
  display: flex;
  align-items: center;
}
.ipt {
  width: 350px;
  margin-right: 12px;
}
.slt {
  width: 200px;
}
</style>
