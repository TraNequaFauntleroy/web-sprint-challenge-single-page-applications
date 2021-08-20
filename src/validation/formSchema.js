import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name must be at least 2 characters')
        .min(2, 'Name must be at least 2 characters'),
    size: yup 
        .string()
        .oneOf(['slice', 'personal', 'party'], 'Size is required')
        .required('Size is required'),
    beef: yup.boolean(),
    chicken: yup.boolean(),
    sausage: yup.boolean(),
    pepperoni: yup.boolean(),
    spinach: yup.boolean(),
    redOnions: yup.boolean(),
    tomatoes: yup.boolean(),
    olives: yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;