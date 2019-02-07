import { calculateComputed } from '@/store/helpers'
import { shallowMount } from '@vue/test-utils'
import Home from '@/components/Home'
import store from '@/store'

const admin = require('firebase-admin');
admin.initializeApp = jest.fn();

describe('Home.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Home, {
      store,
      mocks: {
        $style: {},
      },
      computed: {
        ...calculateComputed
      }
    })
  })
  
  it('should render header correctly', () => {
    expect(wrapper.vm.$el.querySelector('h1').textContent)
    .toEqual('FaleMais')
  })

  it('should identify initial result value', () => {
    expect(wrapper.vm.result).toBeNull()
  })

  it('should identify initial loading value', () => {
    expect(wrapper.vm.loading).toBeFalsy()
  })
})

