import React from 'react'
import Error from './Error'
import {Formik} from "formik"
import {useNavigate} from 'react-router-dom'
import {registrSchema} from '../schemas/registrSchema.js'
import {FaFacebookF} from "react-icons/fa"
import {BsTwitter} from "react-icons/bs"
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'
import classNames from 'classnames'

function Register() {
  const signInNavigate = useNavigate()
  function registerSubmit(values){
    console.log(values)
  }
  function handleSignIn() {
    signInNavigate("/")
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        confirmPassword: ""
      }}
      onSubmit={registerSubmit}
      validationSchema={registrSchema}
    >
      {
        ({values, errors, handleSubmit, handleChange}) => {
          return(
            <div className='container'>
              <div className='wraper'>
                <div className="box">
                  <form autoComplete="off" onSubmit={handleSubmit} className="register-form">
                    <div className='header'>
                      <span>Registration</span>
                      <div className='icons'>
                        <FaFacebookF/>
                        <BsTwitter/>
                       </div>
                    </div>
                    <Input
                      text="USERNAME"
                      type="email"
                      placeholder="Username"
                      name="username"
                      id="email"
                      onChange={handleChange}
                      value={values.email}
                      />
                    <Error text={errors.username} className="error-user"/>

                    <Input
                      text="PASSWORD"
                      type="password"
                      placeholder="Password"
                      name="password"
                      id="password"
                      onChange={handleChange}
                      value={values.password}
                      />
                    <Error text={errors.password} className="error-password"/>

                    <Input
                      text="CONFIRM PASSWORD"
                      type="password"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      id="confirmPassword"
                      onChange={handleChange}
                      value={values.confirmPassword}
                      />
                    <Error text={errors.confirmPassword} className="error-password"/>

                    <Button text="Submit" className={classNames("standard", "regular")}/>
                    <div className='footer'>
                      <Checkbox name="rem" id="rem" text="Remember Me"/>
                      <span>Forgot Password</span>
                    </div>
                  </form>
                </div>
                <div className='welcome-box'>
                  <h1>Welcome to registration </h1>
                  <p>Don't have a login?</p>
                  <Button text="Sign In" className={classNames("standard", "outline")} onClick={handleSignIn}/>
                </div>
              </div>
            </div>
          )
        }
      }
    </Formik>
  )
}

export default Register
