import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name must be at least 2 characters')
        .min(2, 'Name must be at least 2 characters'),
    email: yup 
        .string()
        .trim()
        .required('Email is required'),
    size: yup 
        .string()
        .oneOf(['personal', '10 inch', '12 inch', 'party'], 'Size is required'),
    toppings1: yup.boolean(),
    toppings2:yup.boolean(),
    special: yup
        .string()
        .trim()
})

export default formSchema;