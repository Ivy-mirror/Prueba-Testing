import PostView from '@/views/PostView.vue'
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'

const postsDummy = [
  { id: 1, name: 'Post 1' },
  { id: 2, name: 'Post 2' },
  { id: 3, name: 'Post 3' },
  { id: 4, name: 'Post 4' },
]

describe('PostView.vue', () => {
  it('renderiza lista de posts', async () => {
    const wrapper = mount(PostView)
    //actualiza la variable del estado
    wrapper.vm.posts = postsDummy
    //actualiza el dom
    await wrapper.vm.$nextTick()
    //Revisa que existan los L I renderizados
    expect(wrapper.findAll('li')).toHaveLenght(4)
  })
})
