import * as yup from "yup"

export const loginSchema = yup.object().shape({
  email: yup.string().required("Username is requires!"),
  password: yup.string().min(8, "login must be at least 8 chars long!")
})