import React from 'react'
import Error from './Error'
import '../styles/form.style.scss'
import {Formik} from "formik"
import {useNavigate} from 'react-router-dom'
import {loginSchema} from '../schemas/loginSchema.js'
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"


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
              <div className="box">
               <form autoComplete="off" onSubmit={handleSubmit}>
                 <div className='header'>
                  <span>Sign In</span>
                  <div className='icons'>
                    <FaFacebookF/>
                    <BsTwitter/>
                    </div>
                 </div>
                 <label htmlFor="email">Username</label>
                 <input type="email" placeholder="Username" name="email" id="email" onChange={handleChange} value={values.email}/>
                 <Error text={errors.email}/>
                 <label htmlFor="password">Password</label>
                 <input type="password" placeholder="Password" name="password" id="password" onChange={handleChange} value={values.password}/>
                 <Error text={errors.password}/>
                 <input type="submit" value="Sign In" />
                 <div className='footer'> 
                  <input type="checkbox" name="rem" id="rem"/>
                  <label htmlFor="rem">Remember Me</label>
                  <span>Forgot Password</span>
                 </div>
                </form>
              </div>
            </div>
          )
        }
      }
    </Formik>
  )
}

export default Login
