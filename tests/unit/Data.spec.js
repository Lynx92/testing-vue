import { shallowMount } from '@vue/test-utils';
import Data from '@/components/Data';

describe('Componente Data', () => {
  const wrapperOriginal = shallowMount(Data);

  // Copia del original con su data modificada
  const wrapperModificado = shallowMount(Data, {
    data: () => ({
      text: 'Estoy Modificado',
    }),
  });

  it('comprobar que el texto sea el dado por data', () => {
    expect(wrapperOriginal.text()).toBe('Soy un mono');
    expect(wrapperOriginal.text()).not.toBe('Estoy Modificado');

    expect(wrapperModificado.text()).toBe('Estoy Modificado');
    expect(wrapperModificado.text()).not.toBe('Soy un mono');
  });

  // Ahora modificamos el original en vez de crear una copia modificada
  it('seguir comprobando que el texto sea el dado por data', async () => {
    const nuevoTexto = 'He modificado el original';
    await wrapperOriginal.setData({ text: nuevoTexto });
    expect(wrapperOriginal.text()).toBe(nuevoTexto);
    expect(wrapperOriginal.text()).not.toBe('Soy un mono');
    expect(wrapperOriginal.text()).not.toBe('Estoy Modificado');
  });
});
