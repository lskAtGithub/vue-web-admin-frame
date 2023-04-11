import { defineStore } from 'pinia'
import type { ITagItem } from '@/Types/TagView'

function hasIncludeTab(item: ITagItem, arr: Array<ITagItem>): boolean | ITagItem {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index]
    if (element.path === item.path) return item
  }
  return false
}

const defalutTabList: Array<ITagItem> = [{
  title: '首页',
  path: '/home/homePage',
  defalut: true
}]

export const tabStore = defineStore('tabStore', {
  state: () => {
    return {
      tabList: defalutTabList
    }
  },
  actions: {
    addTabControl(item: ITagItem, index?: number) {
      if (!hasIncludeTab(item, this.tabList)) {
        if (index != undefined) {
          this.tabList.splice(index, 0, item)
        } else {
          this.tabList.push(item)
        }
      }
    },
    removeTabControl(tabName: String) {
      for (let index = 0; index < this.tabList.length; index++) {
        const element = this.tabList[index]
        if (element.path === tabName) {
          this.tabList.splice(index, 1)
          return
        }
      }
    }
  }
})