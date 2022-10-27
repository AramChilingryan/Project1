import React from 'react'
import Error from './Error'
import '../styles/form.style.scss'
import {Formik} from "formik"
import {useNavigate} from 'react-router-dom'
import {loginSchema} from '../schemas/loginSchema.js'


function Login() {
  const navigate = useNavigate()
  function submitForm(values,action){
    console.log(values)
    navigate("/dashboard")
  }

  return (
    <Formik 
      initialValues={{
      email: "",
      password: "",
      }}
      onSubmit={submitForm}
      validationSchema={loginSchema}
    >
      {
        ({values,errors,handleSubmit,handleChange}) => {
          return (
            <div className="container">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <label htmlFor="email">Username</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={values.email}/>
                <Error text={errors.email}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" onChange={handleChange} value={values.password}/>
                <Error text={errors.password}/>
                <input type="submit" value="Submit" />
              </form>
            </div>
          )
        }
      }
    </Formik>
  )
}

export default Login
