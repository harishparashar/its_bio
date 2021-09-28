import React from "react"
import Header from "../../components/Header/header"
import Layout from "../../components/layout"
import '../../Styles/editclient.css'
import logoimage from '../../images/child1.jpeg'

export default function EditProfile() {
  return (
    <>
    <Layout>    
        <Header name='Edit Profile' />
      <section className="e_main_box">
        <div className="e_container"></div>
        <div className="e_container1">
          <div className="e_content">
            <form className="e_form_group">
              <div className="e_add_client">
                <label>Company Name</label>
                <input type="text" />
              </div>
              <div className="e_add_client">
                <label>Company Type</label>
                <select>
                  <option>Freelancer</option>
                  <option>Company</option>
                </select>
              </div>
              <div className="e_add_client">
                <label>Location</label>
                <input type="text" />
              </div>
              <div className="e_add_client">
                <label>About us</label>
                <textarea
                  className="e_add_para"
                  defaultValue={
                    "The CSS property border-radius adds rounded corners on images. You can round all of the image's corners or just select corners, vary the radius on different corners or display an image in the shape of an oval or a circle.The CSS property border-radius adds rounded corners on images. You can round all of the image's corners or just select corners, vary the radius on different corners or display an image in the shape of an oval or a circle.You can round all of the image's corners or just select corners, vary the radius on different corners or display an image in the shape of an oval or a circle.You can round all of the image's corners or just select corners, vary the radius on different corners or display an image in the shape of an oval or a circle\n                   "
                  }
                />
              </div>
              <div className="e_add_button">
                <button>Save</button>
              </div>
            </form>
          </div>
          <div className="e_content1">
            <div className="e_image_logo">
              <div className="e_img_logo">
                <img src={logoimage} alt="logo" />
              </div>
              <div className="e_update_butoon">
                <button>Update Logo</button>
              </div>
            </div>
            <div className="e_content2"></div>
          </div>
        </div>
      </section>
      </Layout>

    </>
  )
}
