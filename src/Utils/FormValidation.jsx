// form Validation YUP
import * as yup from "yup";

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required(`Invalid email`),
  password: yup.string().required().min(6),
});

export const RegisterSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "passwords must match"),
});
