
import React from 'react'
import Header from '../../Common Pages/Header/header';
import '../../Styles/dashbord.css';
import img1 from '../../images/p1.jpg'
import img2 from '../../images/p2.jpg'
import img3 from '../../images/p3.jpg'
import img4 from '../../images/p4.jpg'
import img5 from '../../images/p5.jpg'
import img6 from '../../images/p6.jpg'
import "bootstrap/dist/css/bootstrap.min.css"


export default function Dashbord() {

 const data = {
    "tiles" : [
    {
      "img" : img1
    },
    {
      "img" : img2
    },
    {
      "img" : img3
    },
    {
      "img" : img4
    },
    {
      "img" : img5
    },
    {
      "img" : img6
    },
    {
      "img":img4
    },
    
   ]
  };
    return (
        <div>
           {/* <Header   tech ='Tech-view' dash='Dashbord' /> */}
           <div className="row">
           <div className="col-md-12">
           <div className="a1">
                </div>
            </div>

           {/* section-1  */}
            <section > 

                <div className='sec'>
                  {/* section -2*/}
                  <section className='s'>
                  <div className='d-flex ' style={{flexWrap:'wrap'}}>
                      <div className='logo'>
                      infotech
  
                           </div>
                           <div className='s1'>
                           <h5> webmaster-infotech</h5>   <p>software developement</p>
                           </div>
                           
                           
                <div className='s2'>
               
                <p>webmaster.co.io</p>
                </div>
                 <div className='s3'>
                 <p> Jaipur india</p>
                
                 
                     </div>
             <div className='s4'>
                 
                 <button className="btn badge rounded-pill  float-left rounded-3 w-21 h-9 text-start mt-1"> 
                  edit  profile
                     </button>
                     
                     <p>fb insta icon 
                       
                     </p>
             </div>
             </div>
                  </section>

                  {/* section-3 */}
                  <section className='b1'>
                   <div style={{marginTop:'18px'}}>
                       website
                   </div>
                   <div style={{marginTop:'9px'}}>
                   If you’ve been following our research into the future of React (we don’t expect you to!), you might have heard of something called “concurrent mode” or that it might break your app. In response to this feedback from the community, we’ve redesigned the upgrade strategy for gradual adoption. Instead of an all-or-nothing “mode”, concurrent rendering will only be enabled for updates triggered by one of the new features. In practice, this means you will be able to adopt React 18 without rewrites and try the new features at your own pace.
                   Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.
                   </div>
                 </section>

               {/* section-3 for client add user */}
                 <section className='c'>
                 <div className='c1'>
                     client
                 </div>
                 <div>
                     <button className="btn badge rounded-pill  float-left rounded-3 w-30 h-50 text-start mt-3">
                         add user
                     </button>
                 </div>
                </section>

              {/* section-4 for add images by json */}
              <section className=''> 
                    
                    <div className="row" >
                
  <div style={{width:'100%' ,display:'flex' ,flexWrap:'wrap'}} > 
   {data.tiles.map((elem)=>{
     return <div className='img-d'>
       <img src={elem.img} />
     </div>
   })}
  </div>
</div>                 
 </section>

<div className='e'>
                    this is client
                </div>

 
                
                </div>
                </section>
                
            </div>
            
            </div>
            
    )
        
}
