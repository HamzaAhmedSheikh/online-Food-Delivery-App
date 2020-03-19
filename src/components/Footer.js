import React, { Component } from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
 render() {
  return (
            // Complete Footer Section

   <div className="container-fluid pt-5 bg-footer">
    <div className="container mb-4">
     <div className="row">

                        {/* Popular Cities Section */}

      <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="footer-head-div">
          <h5 className="text-white">Popular Cities</h5>
        </div>
          <div className="footer-list-div">
            <ul>
              <li><a href="#">Karachi</a></li>
              <li><a href="#">Lahore</a></li>
              <li><a href="#">Islamabad</a></li>
              <li><a href="#">Rawalpindi</a></li>
              <li><a href="#">Multan</a></li>
            </ul>
           </div>
      </div>

                 {/* Popular Cuisnies Section */}      

       <div className="col-lg-3 col-md-3 col-sm-12">
        <div className="footer-head-div">
           <h5 className="text-white">Popular Cuisnies</h5>
        </div>
        <div className="footer-list-div">
           <ul>
             <li><a href="#">Apple Juice</a></li>
             <li><a href="#">BB.Q</a></li>
             <li><a href="#">Chicken Roast</a></li>
             <li><a href="#">Hot Dogs</a></li>
             <li><a href="#">Prawns</a></li>
             <li><a href="#">Steam Roast</a></li>
            </ul>
         </div>
        </div>

              {/* Contact Us Section */}

        <div className="col-lg-3 col-md-3 col-sm-12">
           <div className="footer-head-div">
                 <h5 className="text-white">Menu</h5>
           </div>
          <div className="footer-list-div">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">How it works</a></li>
          </ul>
         </div>
        </div>
                        
              {/* Connect Us Section */}            

        <div className="col-lg-3 col-md-3 col-sm-12">
          <div className="footer-head-div">
              <h5 className="text-white">Connect</h5>
          </div>
         <div className="footer-list-div">
          <ul className="social-media mb-3">

             <li className="mr-2">
               <a href="#" className="bg-light-gray rounded-circle p-2">
                   <FontAwesomeIcon icon={faTwitter} />
               </a>
             </li>

             <li className="mr-2">
              <a href="#" className="bg-light-gray rounded-circle p-2">
                  <FontAwesomeIcon icon={faFacebook} />  
              </a>
             </li>
             
             <li className="mr-2">
               <a href="#" className="bg-light-gray rounded-circle p-2">
                 <FontAwesomeIcon icon={faInstagram} />  
               </a>
            </li>
          </ul>

           <ul>
            <li className="pb-3">
             <span className="bg-warning p-2 rounded mr-3">
                 <FontAwesomeIcon icon={faPhone} className="text-white" />
             </span>
                <span> +1 321 828 6662 </span>
            </li>

              <li className="pb-3">
               <span className="bg-warning p-2 rounded mr-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
               </span>
                  <span>+1 321 828 6662</span>
              </li>                                    
            </ul>
         </div>
       </div>
     </div>
   </div>

               {/* Footer Copyright Section */}

       <div className="container">
        <div className="col-12 footer-copyright">
          <p> 
            © 2019 Quick Food. All Rights Reserved. Powered By
            <span style={{ color: "#eb6825", fontWeight: 700 }}>     Hamza       </span>
          </p>
       </div>
     </div>
   </div>
        );
    }
}

export default Footer;

