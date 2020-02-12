import React, { Component } from 'react';
import download from '../images/download.png'
import './Home.css';

class Header extends Component {
render() {
 return( 
  <header>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img src={download} /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav ml-auto">
         <li className="nav-item active">
           <a href='#' className="nav-link active text-uppercase"> 
                    Restaurant 
           </a>
         </li>
        <li className="nav-item active">
           <a className="nav-link" href="#"> LOGIN / REGISTER </a>
        </li> 
        <li className='nav-item active'>
           <button type="button" class="btn btn-warning btn-sm text-uppercase mr-2 mr-1 ">
                   Register Restaurant
           </button>
        </li>          
       </ul>    
     </div>
   </nav>


  <div className="jumbotron big-banner mb-0" style={{height: "500px"}} >

    <div className="container text-light">
  
    <div className="row justify-content-center">
      <div className="col-8">
        <h1> <strong> ORGANIC FAST FOOD MADE <br /> EASY AND HEALTHY</strong> </h1>
      </div>
    </div>

    <div className="row justify-content-center">
     <div className="col-6">
      <div className="input-group mb-3">
       <input type="text" className="form-control" placeholder='Restaurant Name' aria-label="Search" />
       <div className="input-group-append">
          <button className="btn btn-outline-secondary btn-light ml-3" type="button" id="button-addon2">Button</button>
       </div>
     </div>  
    </div>
   </div> 
  </div>
 </div>


</header>
  )  
 }
}

export default Header;