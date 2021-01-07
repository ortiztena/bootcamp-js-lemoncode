import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { rangeNumber } from '@lemoncode/fonk-range-number-validator';

const validationSchema = {
    field: {
        iban: [
            // {
            //     validator: Validators.required,
            //       message: 'Campo requerido',
            // },
            // crean conflictos si ponemos los dos juntos
            { 
                validator: iban,
                message: 'IBAN incorrecto',
                
            }
        ],
        
        amount: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: '',
                    min: {
                        value: 0,
                        inclusive: false,
                    },
                    max: {
                        value: 10000000,
                        inclusive: true,
                    },
                },
            }

        ],
        concept: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            }
        ],
        day: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: '',
                    min: {
                        value: 0,
                        inclusive: false,
                    },
                    max: {
                        value: 31,
                        inclusive: true,
                    },
                },
            }
        ],
        month: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: '',
                    min: {
                        value: 1,
                        inclusive: true,
                    },
                    max: {
                        value: 12,
                        inclusive: true,
                    },
                },
            }
        ],
        year: [
            {
                validator: Validators.required,
                message: 'Campo requerido',
            },
            {
                validator: rangeNumber.validator,
                customArgs: {
                    strictTypes: '',
                    min: {
                        value: 2020,
                        inclusive: true,
                    },
                    max: {
                        value: 2021,
                        inclusive: true,
                    },
                },
            }
        ],
        email: [
            {
                validator: Validators.email,
                message: 'Introduzca un email correcto',
            }
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);