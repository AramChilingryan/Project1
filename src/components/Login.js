import React from 'react'
import Error from './Error'
import { Formik } from "formik"
import { useNavigate } from 'react-router-dom'
import { loginSchema } from '../schemas/loginSchema.js'
import { FaFacebookF } from "react-icons/fa"
import { BsTwitter } from "react-icons/bs"
import Input from './Input'
import Checkbox from './Checkbox'
import Button from './Button'
import classNames from 'classnames'
import { AUTH_TOKEN } from '../constants/token'

function Login() {
  const navigate = useNavigate()

  // React.useEffect(()=> {
  //   if(localStorage.getItem("AUTH_TOKEN") !== null && localStorage.getItem("AUTH_TOKEN") !== "undefined" ) {
  //     navigate("/dashboard")
  //   } else navigate("/login")
  // }, [navigate])
  function submitForm(values,action){
    fetch("http://localhost:3005/login",{
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(values)
    })
    .then(res => res.json())
    .then((data) => {
      localStorage.setItem(AUTH_TOKEN, data.token)
    })
  }
  function handleRegister(){
    navigate("/register")
  }

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      onSubmit={submitForm}
      validationSchema={loginSchema}
    >
      {
        ({values, errors, handleSubmit, handleChange}) => {
          return (
            <div className="container">
              <div className='wraper'>
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
                      name="username"
                      id="email"
                      onChange={handleChange}
                      value={values.username}
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

                    <Button text="Sign In" className={classNames("standard", "regular")}/>
                    <div className='footer'>
                      <Checkbox name="rem" id="rem" text="Remember Me"/>
                      <span>Forgot Password</span>
                    </div>
                  </form>
                </div>
                <div className='welcome-box'>
                  <h1>Welcome to login</h1>
                  <p>Don't have an accout?</p>
                  <Button text="Sign Up" className={classNames("standard", "outline")} onClick={handleRegister} />
                </div>
              </div>
            </div>
          )
        }
      }
    </Formik>
  )
}

export default Login
