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
  affix: true
}]

const tagViewStore = defineStore('tagViewStore', {
  state: () => {
    return {
      tagViewList: defalutTabList
    }
  },
  actions: {
    addTagView(item: ITagItem, index?: number) {
      if (!hasIncludeTab(item, this.tagViewList)) {
        if (index != undefined) {
          this.tagViewList.splice(index, 0, item)
        } else {
          this.tagViewList.push(item)
        }
      }
    },
    removeTagView(tag: ITagItem) {
      for (let index = 0; index < this.tagViewList.length; index++) {
        const element = this.tagViewList[index]
        if (element.path === tag.path) {
          this.tagViewList.splice(index, 1)
          return
        }
      }
    }
  }
})

export default tagViewStore
