import React from 'react'
import Footer from '../components/Footer';
import Navbarcomp from '../components/Navbar'
import './about.css'
import mainimg from '../assets/images/about.webp'
import mission from '../assets/images/mission.webp'
import vision from '../assets/images/vision.jpg'


export default function About(){
   
    return (
      <div className='main'>
        <Navbarcomp/>
        
          <div className='imgbox parent header2'>
              <img className='mainimage' src={mainimg} alt='.' height='auto' width='100%' id='mainimage'/>
              <div className="imgabout h1">
                <span>About Us</span>
              </div>
          </div>

        
        <div className='abouttext'>
            RAM Trucking Group is a trucking company located in Maryland that is 
            dedicated to delivering products safely and punctually. Our growing team of
            drivers, which has been expanding in size over the years, has a proven
            track record of delivering products to every state in the US. We have
            rapidly grown and now offer services that will make the shipping
            process more efficient for our clients.
          </div>
          
          

          <div className='mission '>
            <div style={{fontSize: '1.4em',
            fontWeight:'bold', textAlign: "center"}}>Our Mission</div>
              At RAM Trucking Company, our mission is to be the premier provider
              of transportation solutions for our clients. We are committed to
              delivering the highest level of service and reliability, while
              maintaining a focus on safety and compliance. Our team is dedicated
              to meeting the unique needs of each of our clients and providing
              customized solutions to fit their specific requirements. Through
              innovation, hard work, and a commitment to excellence, we strive
              to be the trusted partner for all of our clients' transportation
                needs. 
          </div>
          <img className='missionimg d-none d-md-block' src={mission} alt='.' height="auto" width='50%' id='mainimage'/>

          <img className='visionimg d-none d-md-block revealfromtop' src={vision} alt='.' height="auto" width='50%' id='mainimage'/>

          <div className='vision revealfromleft'>
            <div style={{fontSize: '1.4em',
            fontWeight:'bold', textAlign: "center"}}>Our Vision</div>
              We envision a future in which we are the
              leading provider of transportation solutions in the industry.
              We see ourselves as a trusted partner for all of our clients,
              with a reputation for reliability, efficiency, and customer
              service that is unmatched in the industry. We envision a future 
              in which we continue to innovate and adapt to the changing needs 
              of our clients and the industry, always staying ahead of the curve 
              and providing value to all of our stakeholders. Through our dedication 
              to excellence and our commitment to our clients, we strive to make RAM 
              Trucking Group the go-to choice for all transportation needs. 
          </div>

          <Footer/>
      </div>
    )
  
}