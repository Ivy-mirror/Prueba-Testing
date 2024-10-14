import HomeView from '@/views/HomeView.vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

describe('HomeView.vue', () => {
  it('Contrasta Snapshot del HTML', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
