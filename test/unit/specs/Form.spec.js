import VueSwal from 'vue-swal'
import { shallowMount } from '@vue/test-utils'
import Form from '@/components/Form'
import store from '@/store'

const admin = require('firebase-admin');
admin.initializeApp = jest.fn();

describe('Form.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Form, {
      store,
      mocks: {
        $style: {},
        $swal: () => VueSwal
      }
    })
  })
  
  it('should render correctly', () => {
    expect(wrapper.vm.$el.querySelector('.innerContainer').textContent)
    .toContain('Origin')

    expect(wrapper.vm.$el.querySelector('.innerContainer').textContent)
    .toContain('Destination')

    expect(wrapper.vm.$el.querySelector('.innerContainer').textContent)
    .toContain('Time (in minutes)')

    expect(wrapper.vm.$el.querySelector('.innerContainer').textContent)
    .toContain('TalkMore Plan')
  })

  it('should show error message', () => {
    wrapper.find('#calculate').trigger('click')
    setTimeout(() => {
      expect(wrapper.vm.$el.querySelector('.swal-modal').textContent).toEqual('The fields marked with * are required')}, 1000)
  })
})

