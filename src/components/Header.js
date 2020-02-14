import React, { Component } from 'react';
import download from '../images/download.png'
import './Home.css';
import { Link } from 'react-router-dom';

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
              <Link to='/restaurant'>   Restaurant </Link> 
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


  <div className="jumbotron big-banner mb-0"  >

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


 <div className='fresh-content text-light py-2'>
       <div className="container">
         <div className="row">


         <div className='col'>
           <div className='media'>
             <div className='media-body'> 
                <h5> 26 Restaurant </h5>
             </div>
            </div>
         </div>

         <div className='col'>
           <div className='media'>
             <div className='media-body'> 
                <h5> 11 People Served </h5>
             </div>
           </div>
         </div>

           <div className='col'>
             <div className='media'>
               <div className='media-body'> 
                  <h5> 49 Registered Users </h5>
               </div>
             </div>
           </div>
       </div>
   </div>
 </div>

  <section className='container ourservices mt-5'>
           <h1> HOW IT WORKS </h1> 
    <p> Cum doctus civibus efficiantur in imperdiet deterruisset. </p>
  </section>   

</header>
  )  
 }
}

export default Header;