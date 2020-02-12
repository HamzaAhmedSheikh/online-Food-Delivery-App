import React, { Component } from 'react';
import './Home.css';
import download from '../images/download.png'
import { Link } from "react-router-dom";

class Restaurant extends Component {
  render(){
    return(
     <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
           <Link to='/'> <img src={download} /> </Link>
        </a>
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
  
      <div className='jumbotrono big-banner-1 mb-0'>
         <input type='search' /> 
      </div>

      </div>  
    )  
  }
}

export default Restaurant;