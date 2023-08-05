import { defineStore } from 'pinia'

import type { ITagItem } from '@/Types/TagView'
import type { RouteRecordRaw } from 'vue-router'

function hasIncludeTab(item: ITagItem, arr: Array<ITagItem>): boolean | ITagItem {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element.path === item.path) return item
  }
  return false
}

function getAffix(arr: RouteRecordRaw[], result: ITagItem[]): ITagItem[] {
  arr.map((item) => {
    if (item.meta?.affix) {
      let current = JSON.parse(JSON.stringify(item))
      console.log(current)
      result.push({
        path: current.path,
        title: current.meta.title,
        query: current.query,
        params: current.params,
        affix: true
      })
    }
    if (item.children && item.children.length) {
      getAffix(item.children, result)
    }
  })
  return result
}

const tagViewStore = defineStore('tagViewStore', {
  state: () => {
    return {
      tagViewList: [] as Array<ITagItem>,
      cacheList: [] as Array<string>
    }
  },
  actions: {
    /**
     * @description 初始化 tagview 数组， 把 affix 为 true 的数据放入其中
     */
    initTagViewList(router: RouteRecordRaw[]) {
      getAffix(router, this.tagViewList)
      console.log(this.tagViewList)
    },

    /**
     * @param item
     * @param index
     * @description 添加 tag view 信息
     */
    addTagView(item: ITagItem, index?: number) {
      if (!hasIncludeTab(item, this.tagViewList)) {
        if (index != undefined) {
          this.tagViewList.splice(index, 0, item)
        } else {
          this.tagViewList.push(item)
        }
      }
    },
    /**
     * @param tag
     * @description 删除 tag view
     */
    removeTagView(tag: ITagItem) {
      for (let index = 0; index < this.tagViewList.length; index++) {
        const element = this.tagViewList[index]
        if (element.path === tag.path) {
          this.tagViewList.splice(index, 1)
          return
        }
      }
    },
    /**
     * @param cacheName
     * @description 添加 keep-alive 缓存
     */
    addCacheList(cacheName: string) {
      if (!this.cacheList.includes(cacheName)) {
        this.cacheList.push(cacheName)
      }
    },
    /**
     * @description 所有数据清空
     */
    resetTagViewList() {
      this.$reset()
    }
  }
})

export default tagViewStore
