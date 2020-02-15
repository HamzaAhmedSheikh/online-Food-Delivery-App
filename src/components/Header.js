import React, { Component } from 'react';
import download from '../images/download.png'
import how_to_work1 from '../images/how_to_work1.png';
import how_to_work2 from '../images/how_to_work2.png';
import how_to_work3 from '../images/how_to_work3.png';
import './Home.css';
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
            <img src={how_to_work2} className='logosetting' />
        </div>
          <h3> Choose A Tasty Dish </h3>   
          <p>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>       
      </div>

      <div className='col-lg-4 col-md-4 col-sm-4 col-10 d-block m-auto'>
        <div className='imgsetting d-block m-auto bg-warning'>
            <img src={how_to_work3} className='logosetting' />
        </div>
          <h3> Pick Up or Delivery </h3>   
          <p>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>       
      </div>
    </div>
  </section>     
   
  {/* <div className='jumbotron banner'> 
    <div className='container mb-5'>
      <p className='h1 text-uppercase text-white'>
          Just Order And We Will Deliver You
      </p>
       <p className='text-white'>
          Pellentesque eget justo eget nibh luctus semper at ut tellus.
       </p>     
       <button type='button' className='btn btn-warning text-uppercase mb-5'>
         <Link to='/home'> <b> Order Now  </b></Link>  
       </button>  
    </div>
  </div>      */}



</header>
  )  
 }
}

export default Header;