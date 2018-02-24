import VLoading from './loading.vue'

export default VLoading

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VLoading.name, VLoading)
}
