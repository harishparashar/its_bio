import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { SignupAction } from "../Store/Actions/AuthAction"
import "../Styles/signup.css"
import "../Styles/Common.css"
import { FaEyeSlash } from "@react-icons/all-files/fa/FaEyeSlash"
import { FaEye } from "@react-icons/all-files/fa/FaEye"
import Swal from "sweetalert2"
import { Link } from "gatsby"
import { Field, reduxForm } from "redux-form"
import { email, required } from "../Common Pages/Validation"
import { renderField } from "../Common Pages/Validation/validation"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
})

function Signup(props) {
  const { handleSubmit, submitting } = props
  const [type, setType] = useState("password")

  const dispatch = useDispatch()

  const handleClickShowPassword = () => {
    setType(type === "password" ? "text" : "password")
  }
  return (
    <>
      <div className="signup">
        <div className="container">
          <div className="signup_left">
            <img
              src="https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-88ba4c9/wp-content/uploads/2019/12/logo-2.png"
              alt="logo"
            />
          </div>
          <form
            className="signup_right"
            onSubmit={handleSubmit(formValues => {
              if (formValues.password !== formValues.confirempassword) {
                Toast.fire({
                  type: "success",
                  title: "Passwords don't match",
                })
              } else {
                dispatch(
                  SignupAction(
                    formValues.acconttype,
                    formValues.companyname,
                    formValues.compemail,
                    formValues.linkdin,
                    formValues.country,
                    formValues.password,
                    formValues.confirempassword
                  )
                )
              }
              // console.log(formValues)
            })}
          >
            <div className="signup_top_right">
              <h3>Create an account</h3>
              <p>
                Already have an account?
                <Link to="/login" style={{ color: "blue" }}>
                  Sign in
                </Link>
              </p>
            </div>
            <div className="input_box">
              <div className="input_text">
                <label>Account Type</label>
                <br />
                <Field name="acconttype" component="select">
                  <option>Please Select Company Account Type </option>
                  <option value={"Freelancer"}>Freelancer</option>
                  <option value={"Company"}>Company</option>
                </Field>
              </div>

              <div className="input_text">
                <label>Company Name</label>
                <br />
                <Field
                  type="text"
                  name="companyname"
                  component={renderField}
                  validate={required}
                />
              </div>

              <div className="input_text">
                <label>Company Email</label>
                <br />
                <Field
                  type="email"
                  name="compemail"
                  component={renderField}
                  validate={email}
                />
              </div>

              <div className="input_text">
                <label>Linkdin</label>
                <br />
                <Field
                  type="text"
                  name="linkdin}"
                  component={renderField}
                  validate={required}
                />
              </div>

              <div className="input_text">
                <label>Country</label>
                <br />
                <Field name="country" component="select">
                  <option>Please Select Country</option>
                  <option value={"India"}>India</option>
                  <option value={"USA"}>USA</option>
                  <option value={"Brazil"}>Brazil</option>
                  <option value={"America"}>America</option>
                </Field>
              </div>

              <div className="input_text">
                <label>Password</label>
                <span className="icon" onClick={handleClickShowPassword}>
                  {type === "password" ? <FaEyeSlash /> : <FaEye />}
                </span>
                <Field
                  type={type}
                  name="password"
                  component={renderField}
                  validate={required}
                />
              </div>

              <div className="input_text">
                <label>Confirm Password</label>
                <span className="icon" onClick={handleClickShowPassword}>
                  {type === "password" ? <FaEyeSlash /> : <FaEye />}
                </span>
                <Field
                  type={type}
                  name="confirempassword"
                  component={renderField}
                  validate={[required]}
                />
              </div>

              <div className="button">
                <button type="submit">Create Account</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default reduxForm({
  form: "signupForm",
})(Signup)
