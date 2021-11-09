import * as React from "react"
import '../../Styles/header.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { FaBell } from "@react-icons/all-files/fa/FaBell";
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaWordpress } from "@react-icons/all-files/fa/FaWordpress";
 


function Header(props){
  return (
    <>

           <header>
  <div className="h_logo_img">
    <img src="https://cdn-clklo.nitrocdn.com/MYSuIlnSDlfpMrNTtwCzrqpXpFLTEsHf/assets/static/optimized/rev-88ba4c9/wp-content/uploads/2019/12/logo-2.png" alt="logo" /> 
  </div>
  <div className="h_header_text">
    <span style={{fontSize:"16px"}}>{props.name}</span> 
  </div>
  <div className="h_header_icon">
    <i><FaBell /></i>
    <i><FaEnvelope /></i>
    <i><FaWordpress /></i>
  </div>           
</header>

            
</>
  )
 }
export default Header;

 