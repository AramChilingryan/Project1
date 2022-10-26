import React from 'react'
import "./styles/form.style.scss"
import {Formik} from "formik"
import * as yup from "yup"

const mySchema = yup.object().shape({
  Email: yup.string().required("Username is requires!"),
  Password: yup.string().min(8, "login must be at least 8 chars long!")
})

function App() {

  function submitForm(values,action){
    console.log(values)
  }

  return (
    <Formik 
      initialValues={{
      Email: "",
      Password: "",
      }}
      onSubmit = {submitForm}
      validationSchema = {mySchema}

    >
      {
        ({values,errors,handleSubmit,handleChange})=> {
          return (
            <div className='container'>
  
              <form autoComplete='off' onSubmit={handleSubmit}>
                <label htmlFor = "email">Username</label>
                <input type = "email" name = "Email" id ='email' onChange={handleChange} value = {values.Email}/>
                <p>{errors.Email}</p>
                <label htmlFor = "password">Password</label>
                <input type = "password" name = "Password" id= "password" onChange={handleChange} value = {values.Password}/>
                <p>{errors.Password}</p>
                <input type = "submit" value = "Submit" />
              </form>
       
            </div>
          )
        }
      }
    </Formik>
  
  )
}

export default App