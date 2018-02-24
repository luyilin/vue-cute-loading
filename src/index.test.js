import { mount } from 'vue-test-utils'
import VLoading from './'

test('it works', () => {
  const wrapper = mount(VLoading)
  expect(wrapper.isVueInstance()).toBe(true)
})
