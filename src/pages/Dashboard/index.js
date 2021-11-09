import React, { useEffect, useState } from "react"
import Header from "../../components/Header/header"
import "../../Styles/dashbord.css"
import img1 from "../../images/p1.jpg"
import img2 from "../../images/p2.jpg"
import img3 from "../../images/p3.jpg"
import img4 from "../../images/p4.jpg"
import img5 from "../../images/p5.jpg"
import img6 from "../../images/p6.jpg"
import "bootstrap/dist/css/bootstrap.min.css"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaMapMarkerAlt } from "@react-icons/all-files/fa/FaMapMarkerAlt"
import { FaPlusCircle } from "@react-icons/all-files/fa/FaPlusCircle"
import { Link } from "gatsby"
import { useDispatch, useSelector } from "react-redux"
import { ProfilePicAction } from "../../Store/Actions/ProfilePicAction"
import { ProfileAction } from "../../Store/Actions/ProfileAction"

export default function Dashbord() {
  const [img, setImg] = useState()
  const data = {
    tiles: [
      {
        img: img1,
      },
      {
        img: img2,
      },
      {
        img: img3,
      },
      {
        img: img4,
      },
      {
        img: img5,
      },
      {
        img: img6,
      },
      {
        img: img4,
      },
    ],
  }

  const dispatch = useDispatch()
  const profiledispatch = useDispatch()
  const imgData = useSelector(state => {
    return state.ProfileReducer.data?.Data
  })

  const handelChange = e => {
    setImg(e.target.files[0])
    dispatch(ProfilePicAction(e.target.files[0]))
  }


  useEffect(() => {
    profiledispatch(ProfileAction())
  }, [])

  return (
    <>
      <Header name="DashBoard" />
      <section className="main_box">
        <div className="container1">
          <div className="d_content">
            <div className="d_content1">
              <img src={imgData?.profilepic} alt="ProfileImage" />
              <label className="filelabel">
              <i><FaPlusCircle/></i>
                <input type="file" classname="FileUpload1" id="FileInput"  onChange={handelChange} />
              </label>
            </div>
            <div className="d_content2">
              <div>
                <h1>{imgData?.companyname}</h1>{" "}
              </div>
              <p>software developement</p>
            </div>
            <div className="d_content3">
              <p>{imgData?.companyemail}</p>
            </div>
            <div className="d_content4">
              <p>
                <i><FaMapMarkerAlt /></i>
                Jaipur india
              </p>
            </div>
            <div className="d_content5">
              <div className="d_button">
              <Link to='/EditProfile'> <button>Edit Profile</button></Link>
              </div>
              <div className="d_content6">
                <i><FaFacebook /></i>  
                <i><FaInstagram /></i>
                <i><FaLinkedin /></i>
              </div>
            </div>
          </div>
          <section>
            <div className="d_text">
              <h4>About Us</h4>
              <p>
                about us If you’ve been following our research into the future
                of React (we don’t expect you to!), you might have heard of
                something called “concurrent mode” or that it might break your
                app. In response to this feedback from the community, we’ve
                redesigned the upgrade strategy for gradual adoption. Instead of
                an all-or-nothing “mode”, concurrent rendering will only be
                enabled for updates triggered by one of the new features. In
                practice, this means you will be able to adopt React 18 without
                rewrites and try the new features at your own pace. Auto-layout
                for flexbox grid columns also means you can set the width of one
                column and have the sibling columns automatically resize around
                it.
              </p>
            </div>
          </section>
          <section className="d_client_button">
            <div>
              <h2>Client</h2>
            </div>
            <div className="d_addnew">
            <Link to='/AddClient'><button>Add New</button></Link>;
            </div>
          </section>
          <section>
            <div className="d_client_img">

            {data.tiles.map(elem => {
                    return (
                      <div className="d_img">
                        <img src={elem.img} />
                      </div>
                    )
                  })}
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
