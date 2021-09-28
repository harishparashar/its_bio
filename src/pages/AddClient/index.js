import React from "react"
import Header from "../../components/Header/header"
import Layout from "../../components/layout"
import "../../Styles/addclient.css"
import logoimage from '../../images/child1.jpeg'

export default function AddClient() {
  return (
    <>
    <Layout>
    <Header name="Add Clients" />
      <section className="ac_main_box">
        <div className="ac_container"></div>
        <div className="ac_container1">
          <div className="ac_content">
            <form className="ac_form_group">
              <div className="ac_add_client">
                <label>Client Name</label>
                <input type="text" />
              </div>
              <div className="ac_add_client">
                <label>Technology</label>
                <input type="text" />
              </div>
              <div className="ac_add_client">
                <label>Description</label>
                <textarea className="add_para">
                  The CSS property border-radius adds rounded corners on images.
                  You can round all of the image's corners or just select
                  corners, vary the radius on different corners or display an
                  image in the shape of an oval or a circle.The CSS property
                  border-radius adds rounded corners on images. You can round
                  all of the image's corners or just select corners, vary the
                  radius on different corners or display an image in the shape
                  of an oval or a circle.You can round all of the image's
                  corners or just select corners, vary the radius on different
                  corners or display an image in the shape of an oval or a
                  circle.You can round all of the image's corners or just select
                  corners, vary the radius on different corners or display an
                  image in the shape of an oval or a circle
                </textarea>
              </div>
              <div className="ac_add_button">
                <button>Save</button>
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
