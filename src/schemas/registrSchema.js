import * as yup from "yup"

export const registrSchema = yup.object().shape({
  username: yup.string().required("Username is required!"),
  password: yup.string().min(8, "password must be at least 8 chars long!"),
  confirmPassword: yup.string().min(8, "password must be at least 8 chars long!"),
})