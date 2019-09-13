import { mount } from 'vue-test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const wrapper = mount(HelloWorld)
    const h1 = wrapper.find('.hello h1')
    expect(h1.text()).toEqual('Welcome to Your Vue.js App')
  })
})
