import React, { Component } from 'react';
import download from '../images/download.png'
import how_to_work1 from '../images/how_to_work1.png';
import how_to_work2 from '../images/how_to_work2.png';
import how_to_work3 from '../images/how_to_work3.png';
import listing_logo1 from '../images/listing_logo1.png';
import listing_logo2 from '../images/listing_logo2.png';
import listing_logo3 from '../images/listing_logo3.png';
import listing_logo4 from '../images/listing_logo4.png';
import listing_logo5 from '../images/listing_logo5.png';
import listing_logo6 from '../images/listing_logo6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import './Home.css';
import Footer from './Footer'
import { Link } from 'react-router-dom';

class Header extends Component {
render() {
 return( 
  <header>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <Link to='/'><img src={download} /> </Link> </a>
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

<div className='row rowsetting'>
<div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
<div className='imgsetting d-block m-auto bg-warning'>
    <img src={how_to_work1} className='logosetting' />
</div>
  <h3> Choose A Restaurant </h3>   
  <p>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>       
</div>

<div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
<div className='imgsetting d-block m-auto bg-warning'>
    <img src={how_to_work2} className='logosetting'  />
</div>
  <h3> Choose A Tasty Dish </h3>   
  <p>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>       
</div>

<div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
<div className='imgsetting d-block m-auto bg-warning'>
    <img src={how_to_work3} className='logosetting'  />
</div>
  <h3> Pick Up Or Delivery </h3>   
  <p>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>       
</div> 

<div className='col-lg-8 col-md-4 col-sm-4 col-10 d-block m-auto'>        
    <p> <strong> <h1> New Features Will Be Added  </h1>  </strong> </p>      
</div>

</div>
</section>     


<div className='jumbotron text-center py-5 banner'>
<div className='container mb-5'>
<p className="h1 text-uppercase text-white mt-5 mb-3">
Just Order And We Will Deliver You
</p>
<p class="text-white">
Pellentesque eget justo eget nibh luctus semper at ut tellus.
</p> 
<button type="button" class="btn btn-warning text-uppercase mb-5">
   <b> <Link to='/restaurant'> Order Now </Link> </b>
</button>
</div>
</div>

  

<div className="container-fluid py-5">
 <div className="py-4">
   <h2 className="h2 text-uppercase text-center">Featured Restaurant</h2>
    <p className="text-center">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
  </div>
    <div className="container">
    <div className="row">
     <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
      <div className="container res-shadow res-border">
      <div className="row p-3">
      <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
        <img style={{ width: "70%" }} alt="Natural Healthy Food" src={listing_logo1} />
      </div>
        <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
              <h5 className="mb-1">Natural Healthy Food</h5>
               <p className="mb-2"><small>Apple Juice, Beef Roast, Cheese Burger</small></p>
            <p>
              <small className="">
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
               </small>
               <small>(1) Review</small>
             </p>
                <span style={{ position: "absolute", top: 5, right: 5 }}>
                  <FontAwesomeIcon icon={faHeart} className="text-success mr-1" />
                </span>
          </div>
         </div>        
       </div>
    </div>
    

    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
       <div className="container res-shadow res-border">
       <div className="row p-3">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
          <img style={{ width: "70%" }} alt="Menu & Drinks" src={listing_logo2} />
       </div>
        <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
              <h5 className="mb-1">Menu &amp; Drinks</h5>
               <p className="mb-2"><small>Chicken Roast, Chines Soup, Cold Coffee</small></p>
            <p>
              <small className="">
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
               </small>
               <small>(3) Review</small>
             </p>
                <span style={{ position: "absolute", top: 5, right: 5 }}>
                  <FontAwesomeIcon icon={faHeart} className="text-success mr-1" />
                </span>
          </div>
         </div>        
       </div>
    </div>
    

    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
       <div className="container res-shadow res-border">
       <div className="row p-3">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
          <img style={{ width: "70%" }} alt="Chefs" src={listing_logo3} />
       </div>
        <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
              <h5 className="mb-1">Chefs</h5>
               <p className="mb-2"><small>Egg Fry, Noodles, Pastry</small></p>
          <p>
           <small className="">
             <FontAwesomeIcon icon={faStar} className="rating mr-1" />
             <FontAwesomeIcon icon={faStar} className="rating mr-1" />
             <FontAwesomeIcon icon={faStar} className="rating mr-1" />
             <FontAwesomeIcon icon={faStar} className="rating mr-1" />
             <FontAwesomeIcon icon={faStar} className="rating mr-1" />
            </small>
            <small>(1) Review</small>
           </p>
                <span style={{ position: "absolute", top: 5, right: 5 }}>
                  <FontAwesomeIcon icon={faHeart} className="text-success mr-1" />
                </span>
          </div>
         </div>        
       </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
       <div className="container res-shadow res-border">
       <div className="row p-3">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
          <img style={{ width: "70%" }} alt="Menu's" src={listing_logo4} />
       </div>
        <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
              <h5 className="mb-1">Menu's</h5>
               <p className="mb-2"><small>Fish Fry, Fresh Juice, Stakes</small></p>
            <p>
              <small className="">
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
               </small>
               <small>(1) Review</small>
             </p>
                <span style={{ position: "absolute", top: 5, right: 5 }}>
                  <FontAwesomeIcon icon={faHeart} className="text-success mr-1" />
                </span>
          </div>
         </div>        
       </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
       <div className="container res-shadow res-border">
       <div className="row p-3">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
          <img style={{ width: "70%" }} alt="Food N&H" src={listing_logo5} />
       </div>
        <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
              <h5 className="mb-1">Food N&amp;H</h5>
               <p className="mb-2"><small>Beef Roast, Cheese Burger, Doughnut</small></p>
            <p>
              <small className="">
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
               </small>
               <small>(4) Review</small>
             </p>
                <span style={{ position: "absolute", top: 5, right: 5 }}>
                  <FontAwesomeIcon icon={faHeart} className="text-success mr-1" />
                </span>
          </div>
         </div>        
       </div>
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
       <div className="container res-shadow res-border">
       <div className="row p-3">
        <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
          <img style={{ width: "70%" }} alt="Restaurant" src={listing_logo6} />
       </div>
        <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
              <h5 className="mb-1">Restaurant</h5>
               <p className="mb-2"><small>Apple Juice, BB.Q</small></p>
            <p>
              <small className="">
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
                 <FontAwesomeIcon icon={faStar} className="rating mr-1" />
               </small>
               <small>(2) Review</small>
             </p>
                <span style={{ position: "absolute", top: 5, right: 5 }}>
                  <FontAwesomeIcon icon={faHeart} className="text-success mr-1" />
                </span>
          </div>
         </div>        
       </div>
    </div> 
   </div>
  </div> 
</div>
 
    <Footer />


</header>
  )  
 }
}

export default Header;