import { Link  } from 'gatsby'
import React from 'react'
import '../Styles/login.css'
import '../../node_modules/sweetalert2/dist/sweetalert2.min.css'
import Layout from '../components/layout'
import { useDispatch,useSelector } from 'react-redux'
import { LoginAction } from '../Store/Actions/AuthAction';
import {Field, reduxForm,} from 'redux-form'
import { aol, email, minLength2, required } from '../Common Pages/Validation'
import { renderField } from '../Common Pages/Validation/validation'



 function Login(props) {
  const {handleSubmit, submitting } = props

  const dispatch = useDispatch();



    return (
        <>
        <Layout>
      <div className="l_login">
  <div className="l_container">
    <div className="l_login_left">
      <img src="https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-4a01c7f/wp-content/uploads/2019/12/logo-2.png" alt="logo" />
    </div>
    <form className="l_login_right" onSubmit={handleSubmit((formValues=>{
      dispatch(LoginAction(formValues.email,formValues.password)) 
      // console.log(formValues)
    }))}>
      <div className="l_login_top_right">
        <h3>Sign in</h3>
        <p>New user?<Link to='/signup' style={{color:'blue'}}>Create an account</Link></p>
      </div>
      <div className="l_login_input_box">
        <div className="l_login_input_text">
          <label>Email Address</label><br />
          <Field type="email" name="email"  component={renderField} validate={email} warn={aol}/>
      
        </div>
        <div className="l_login_input_text">
          <label>Password</label><br />
          <Field type="Password" name='password' component={renderField} validate={[ minLength2,required]} />
        </div>
      </div>
      <div className="l_login_button">
        <button type='submit' disabled={submitting}>Sign in</button>
      </div>
    </form>
  </div>
</div>

</Layout> 
        </>
    )
}


export default reduxForm({
  form:'loginForm'
})(Login)