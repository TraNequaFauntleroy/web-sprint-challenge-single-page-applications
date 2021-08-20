import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name must be at least 2 characters')
        .min(2, 'Name must be at least 2 characters'),
    size: yup 
        .string()
        .oneOf(['personal', '10 inch', '12 inch', 'party'], 'Size is required')
        .required('Size is required'),
    beef: yup.boolean(),
    chicken: yup.boolean(),
    sausage: yup.boolean().oneOf([true]),
    pepperoni: yup.boolean().oneOf([true]),
    spinach: yup.boolean().oneOf([true]),
    redOnions: yup.boolean().oneOf([true]),
    tomatoes: yup.boolean().oneOf([true]),
    olives: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;