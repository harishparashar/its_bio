import React,{useEffect,useState} from "react"
import Header from "../../components/Header/header"
import Layout from "../../components/layout"
import '../../Styles/editclient.css'
import logoimage from '../../images/child1.jpeg'
import { useDispatch, useSelector } from "react-redux"
import { EditProfileAction } from "../../Store/Actions/EditProfileAction"
import { ProfileAction } from "../../Store/Actions/ProfileAction"
import { ProfilePicAction } from "../../Store/Actions/ProfilePicAction"


export default function EditProfile() {
  const [img,setImg] =useState();
  const [cname,setCname]=useState('');
  const [ctype,setCtype]=useState('');
  const [location,setLocation]=useState('');
  const [desc,setDescription]=useState('')
  
const dispatch = useDispatch();
const Data = useSelector((state=>{
  return state.ProfileReducer.data?.Data
}))

const profiledispatch =useDispatch();
const imgData = useSelector((state=>{
  return state.ProfileReducer.data?.Data
}))


useEffect(() => {
  profiledispatch(ProfileAction())
  setCname(Data?.companyname);
      setCtype(Data?.companytype)
      setLocation(Data?.location);
      setDescription(Data?.aboutus); 
}, []);

const profileSubmit =(e)=>{
e.preventDefault();
dispatch(EditProfileAction(cname,ctype,location,desc));
}



const handelChange = (e)=>{
  setImg(e.target.files[0])
  dispatch(ProfilePicAction(e.target.files[0]))
  
}

  return (
    <>
    <Layout>    
        <Header name='Edit Profile' />
      <section className="e_main_box">
        <div className="e_container"></div>
        <div className="e_container1">
          <div className="e_content">
            <form className="e_form_group" onSubmit={profileSubmit}>
              <div className="e_add_client">
                <label>Company Name</label>
                <input type="text" value={cname} onChange={(e)=>setCname(e.target.value)} />
              </div>
              <div className="e_add_client">
                <label>Company Type</label>
                <select value={ctype} onChange={(e)=>setCtype(e.target.value)}>
                  <option disabled>Select Company Type</option>
                  <option value="Freelancer">Freelancer</option>
                  <option value="Company">Company</option>
                </select>
              </div>
              <div className="e_add_client">
                <label>Location</label>
                <input type="text" value={location} onChange={(e)=>setLocation(e.target.value)}/>
              </div>
              <div className="e_add_client">
                <label>About us</label>
                <textarea value={desc} onChange={(e)=>setDescription(e.target.value)}
                  className="e_add_para"
                />
              </div>
              <div className="e_add_button">
                <button type='submit'>Save</button>
              </div>
            </form>
          </div>
          <div className="e_content1">
            <div className="e_image_logo">
              <div className="e_img_logo">
              <img src={imgData?.profilepic} alt="ProfileImage" />
              </div>
              <div className="e_update_butoon">
              <label class="e_filelabel">
              <i>Update Logo</i>
                  <input type='file'  onChange={handelChange} className="FileUpload1" id="EFileInput"/>
                  </label>                
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
