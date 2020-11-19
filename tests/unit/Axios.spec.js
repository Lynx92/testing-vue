import { shallowMount } from '@vue/test-utils';
import Axios from '@/components/Axios';
import flushPromises from 'flush-promises';
jest.mock('axios');

describe('Componente Axios', () => {
  it('obtiene datos de una llamada a la API al pulsar el boton', async () => {
    const wrapper = shallowMount(Axios);
    // Al empezar no hay ningun texto
    expect(wrapper.find('#ipsum').exists()).toBeFalsy();

    await wrapper.find('button').trigger('click');

    // Esperamos la accion de axios
    await flushPromises();

    // Comprobamos que es un texto y que no es un error
    expect(wrapper.find('#ipsum').exists()).toBeTruthy();
    expect(wrapper.find('#ipsum')).not.toBe('Error');
  });
});
