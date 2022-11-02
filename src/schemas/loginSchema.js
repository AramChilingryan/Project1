import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup.string().required("Username is required!"),
  password: yup.string().min(8, "password must be at least 8 chars long!"),
})