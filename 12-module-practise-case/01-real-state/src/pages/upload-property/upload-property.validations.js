import { Validators, createFormValidation } from '@lemoncode/fonk';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';
import { arrayRequired } from '@lemoncode/fonk-array-required-validator';


const validationSchema = {
  field: {
    title: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },  // Valid description for length greater than 10 chars
        message: 'El valor proporcionado no cumple con la longitud mínima',
      },
    ],

    notes: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },   // Valid description for length greater than 10 chars
        message: 'El valor proporcionado no cumple con la longitud mínima',
      },
    ],

    email: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.email,
        message: 'introduzca un email válido',
      },
    ],

    phone: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.pattern,
        customArgs: { pattern: /^(6|7)\d{8}$/ },
        message: 'Número de teléfono no válido',
      },
    ],

    price: [
      {
        validator: positiveNumber.validator,
        message: 'Por favor introduzca una cantidad correcta',
      },
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
    ],

    saleTypes: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 4 },
        message: 'Introducir, al menos, un elemento',
      },
    ],

    address: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 5 },  
        message: 'La dirección no cumple con la longitud mínima',
      },
    ],

    city: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 3 },
        message: 'Elegir, al menos, una opción',
      },
    ],
    province: [
      {
        validator: Validators.required,
        message: 'Por favor seleccione una provincia',
      },
    ],

    squareMeter: [
      {
        validator: positiveNumber.validator,
        message: 'Por favor introduzca un número positivo',
      },
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
    ],

    rooms: [
      {
        validator: positiveNumber.validator,
        message: 'Por favor introduzca un número positivo',
      },
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
    ],

    bathrooms: [
      {
        validator: positiveNumber.validator,
        message: 'Por favor introduzca un número positivo',
      },
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
    ],

    mainFeatures: [
      {
        validator: arrayRequired.validator,
        customArgs: { minLength: 1, maxLength: 30 },
        message: 'Agrege, al menos, una característica',
      },
    ],

    locationUrl: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.pattern,
      customArgs: { pattern: /^(http|https)\:\/\/www\.google\.com\/maps\/embed\?/ },
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);