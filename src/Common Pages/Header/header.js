import * as React from "react"

import '../../Styles/header.css'
import "bootstrap/dist/css/bootstrap.min.css"
 function Header(props){
  return (
    <div>
 
 <header >
                <span className='a'>{props.tech}</span> 
                <p className='b'> {props.dash}</p>
              
            {/* <FontAwesomeIcon >{props.icon} </FontAwesomeIcon> */}
             
             {/* <i className="fa fa-envelope"></i>
             <i className="fas fa-bell"></i>
                */}
            <i className= {props.icon}></i>
           
            </header>
            
</div>
  )
 }
export default Header;

 