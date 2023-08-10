import { useRouter } from 'vue-router'
import useStore from '@/store'
import type { ITagItem } from '@/Types/TagView'

const router = useRouter()

const { tagview } = useStore()

/**
 * @param { ITagItem } tag
 * @description 在调用时销毁当前的 tag view  并且 返回到首页
 */
const useCloseTagAndGoHome = (tag: ITagItem) => {
  tagview.removeTagView(tag)
  router.replace({
    path: '/'
  })
}

export default { useCloseTagAndGoHome }
