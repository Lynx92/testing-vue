import { shallowMount } from '@vue/test-utils';
import PropsData from '@/components/PropsData.vue';

describe('Componente PropsData', () => {
  const wrapper = shallowMount(PropsData, {
    propsData: {
      text: 'Hola!',
    },
  });

  test('comprobar que se pasan bien los props ', () => {
    expect(wrapper.text()).toBe('Hola!');
  });

  test('seguir comprobando que se pasan bien los props ', async () => {
    await wrapper.setProps({ text: 'Adios!' });
    expect(wrapper.text()).toBe('Adios!');
  });
});
