import { shallowMount } from '@vue/test-utils';
import ValidationForm from '@/components/ValidationForm';

describe('Componente Validation Form', () => {
  it('Muestra el mensaje de error correctamente', async () => {
    const wrapper = shallowMount(ValidationForm);

    // Cuando no se escribe nada, aparecen los errores
    expect(wrapper.find('#nameErr').exists()).toBeTruthy();
    expect(wrapper.find('#ageErr').exists()).toBeTruthy();

    // Cuando se escribe el nombre, solo aparece el error de la edad
    await wrapper.setData({ name: 'Pepe' });
    expect(wrapper.find('#nameErr').exists()).toBeFalsy();
    expect(wrapper.find('#ageErr').exists()).toBeTruthy();

    // Cuando se escribe la edad, solo aparece el error del nombre
    await wrapper.setData({ age: '28' });
    expect(wrapper.find('#nameErr').exists()).toBeFalsy();
    expect(wrapper.find('#ageErr').exists()).toBeFalsy();
  });
});
