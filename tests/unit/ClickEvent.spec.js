import { shallowMount } from '@vue/test-utils';
import ClickEvent from '@/components/ClickEvent.vue';

describe('Componente ClickEvent', () => {
  const wrapper = shallowMount(ClickEvent);

  const boton = wrapper.find('#myBtn');
  const counter = wrapper.find('#myCounter');

  it('comprueba que al hacer click en el boton muestra el resultado correcto', async () => {
    await boton.trigger('click'); // importante el await
    expect(counter.text()).toBe('10 €');
  });
});
