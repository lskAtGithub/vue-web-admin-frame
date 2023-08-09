<template>
  <div>
    <div
      v-loading="loading"
      class="tinymce-container"
      :class="{ dark: isDark }"
      :style="{ width: props.width }"
    >
      <textarea :id="tinymceId" class="tinymce-textarea"></textarea>
    </div>
  </div>
</template>
<script setup lang="ts" name="TinymceComponents">
import { ref, onMounted, watch, nextTick, onUnmounted } from 'vue'
import plugins from './plugins'
import toolbar from './toolbar'
import load from './dynamicLoadScript'
import ToolUtils from '@/utils/ToolUtils'
import { ElMessage } from 'element-plus'
import { isDark } from '@/composables/dark'

import type { Ref } from 'vue'

let tinymceId: string = ToolUtils.getKey()
let loading: Ref<boolean> = ref(false)
let fullscreen: Ref<boolean> = ref(false)
let hasChange: Ref<boolean> = ref(false)
let hasInit: Ref<boolean> = ref(false)

const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  width: {
    type: [Number, String],
    required: false,
    default: '100%'
  },
  height: {
    type: [Number, String],
    required: false,
    default: '460px'
  },
  menubar: {
    type: String,
    default: 'file edit insert view format table'
  }
})

const myEmit = defineEmits(['input'])

const init = () => {
  loading.value = true
  load('/tinymce/tinymce.min.js', (err: any) => {
    if (err) {
      ElMessage.error(err.message)
      return
    }
    initTinymce()
  })
}

const initTinymce = () => {
  window.tinymce.init({
    selector: `#${tinymceId}`,
    branding: false,
    fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    font_formats:
      '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
    language: 'zh_CN',
    height: props.height,
    body_class: 'panel-body ',
    object_resizing: true,
    toolbar: toolbar,
    menubar: props.menubar,
    plugins: plugins,
    end_container_on_empty_block: true,
    powerpaste_word_import: 'clean',
    code_dialog_height: 450,
    code_dialog_width: 1000,
    advlist_bullet_styles: 'square',
    advlist_number_styles: 'default',
    default_link_target: '_blank',
    link_title: false,
    nonbreaking_force_tab: true,

    init_instance_callback: (editor: any) => {
      if (props.value) {
        editor.setContent(props.value)
      }
      hasInit.value = true
      editor.on('NodeChange Change KeyUp SetContent', () => {
        hasChange.value = true
        myEmit('input', editor.getContent())
      })
      loading.value = false
    },
    setup(editor: any) {
      editor.on('FullscreenStateChanged', (e: any) => {
        fullscreen.value = e.state
      })
    },
    convert_urls: false
  })
}

const destroyTinymce = () => {
  const tinymce = window.tinymce.get(tinymceId)
  if (fullscreen) {
    tinymce.execCommand('mceFullScreen')
  }

  if (tinymce) {
    tinymce.destroy()
  }
}

watch(
  () => props.value,
  (val) => {
    if (hasChange.value && hasInit.value) {
      nextTick(() => window.tinymce.get(tinymceId).setContent(val || ''))
    }
  }
)

onMounted(() => init())
onUnmounted(() => destroyTinymce())
</script>

<style scoped lang="scss">
.dark {
  filter: invert(1);
}
</style>
