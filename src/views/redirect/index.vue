<script lang="ts" setup>
import { nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted(() => {
  const { params, query } = route
  const { path } = params
  nextTick(() => {
    router.replace({ path: '/' + path, query })
  })
})
</script>
