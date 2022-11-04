import React from 'react'
import Error from './Error'
import {Formik} from "formik"
import {useNavigate} from 'react-router-dom'
import {loginSchema} from '../schemas/loginSchema.js'
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'

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
        ({values, errors, handleSubmit, handleChange}) => {
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
                  <Input
                    text="USERNAME"
                    type="email"
                    placeholder="Username"
                    name="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <Error text={errors.email} className="error error-user"/>

                  <Input
                    text="PASSWORD"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                  <Error text={errors.password} className="error error-password"/>

                  <Button text="Sign In" className="standard regular"/>
                  <div className='footer'> 
                    <Checkbox name="rem" id="rem" text="Remember Me"/>
                    <span>Forgot Password</span>
                  </div>
                </form>
              </div>
              <div className='box signUp-box'>
                 <h1>Welcome to login</h1>
                 <p>Don't have an accout?</p>
                 <Button text="Sign Up" className="standard outline"/>
              </div>
            </div>
          )
        }
      }
    </Formik>
  )
}

export default Login
