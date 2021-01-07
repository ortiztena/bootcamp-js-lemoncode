
import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    email: [
      {
        validator: Validators.email,
        message: 'introduzca un email válido',
      },
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
    ],
    message: [
      {
        validator: Validators.required,
        message: 'Por favor, complete el campo requerido',
      },
      {
        validator: Validators.minLength,
        customArgs: { length: 10 },
        message: 'Por favor, deje un comentario',
      },
    ],
  },
};

export const formValidation = createFormValidation(validationSchema);