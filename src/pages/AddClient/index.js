import React from "react"
import Header from "../../components/Header/header"
import Layout from "../../components/layout"
import "../../Styles/addclient.css"
import logoimage from '../../images/child1.jpeg'
import {Field, reduxForm,} from 'redux-form'
import { useDispatch } from "react-redux"
import { renderField, renderTextArea } from "../../Common Pages/Validation/validation"
import { required } from "../../Common Pages/Validation"
import { AddClientAction } from "../../Store/Actions/AddClientAction"

 function AddClient(props) {
  const {handleSubmit } = props
  const dispatch = useDispatch();

  return (
    <>
    <Layout>
    <Header name="Add Clients" />
      <section className="ac_main_box">
        <div className="ac_container"></div>
        <div className="ac_container1">
          <div className="ac_content">
            <form className="ac_form_group" onSubmit={handleSubmit((formValues=>{
      dispatch(AddClientAction(formValues.name,formValues.technology,formValues.description)) 
      // console.log(formValues)
    }))}>
              <div className="ac_add_client">
                <label>Client Name</label>
                <Field type="text" name="name" component={renderField} validate={required} />
              </div>
              <div className="ac_add_client">
                <label>Technology</label>
                <Field type="text" name="technology" component={renderField} validate={required} />
              </div>
              <div className="ac_add_client">
                <label>Description</label>
                <Field type="textarea" className="add_para" name="description" component={renderTextArea} validate={required}  />
              </div>
              <div className="ac_add_button">
                <button type="submit">Save</button>
              </div>
            </form>
          </div>

          <div className="ac_content1">
            <div className="ac_img_logo">
              <img src={logoimage} alt="logo" />
            </div>
            <div className="ac_logo_button">
              <div className="ac_update_butoon">
                <button>Update Logo</button>
              </div>
              <div className="ac_delete_button">
                <button>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      </Layout>
    </>
  )
}


export default reduxForm({
  form:'AddClient'
}) (AddClient)