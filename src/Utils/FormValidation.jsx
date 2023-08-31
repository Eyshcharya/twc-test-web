// form Validation YUP
import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email(`Invalid email`).required(`Email is Required`),
  password: yup.string().required(`Password is Required`),
});

export const RegisterSchema = yup.object().shape({
  email: yup.string().email(`Invalid email`).required(`Email is Required`),
  password: yup
    .string()
    .required(`Password is Required`)
    .min(6, `Password should contain minimum 6 characters`),
  confirmPassword: yup
    .string()
    .required(`Confirm the Password`)
    .oneOf([yup.ref("password"), null], "Passwords don't match"),
});
