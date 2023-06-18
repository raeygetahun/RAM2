import React from 'react'
import Footer from '../components/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbarcomp from '../components/Navbar'
import contact from '../assets/images/contact.jpg'

import Contactus from '../components/Contactus'
import './about.css'

export default function Contact(){
   
    return (
      <div className='main'>
        <Navbarcomp/>
        <img  className='d-none d-md-block' style={{float:'left',marginRight:'10px',marginTop:'-10px'}}  src={contact} alt='.' height='auto' width='300px' id='mainimage'/>

        <div style={{height:'200px'}}>
            <div style={{fontSize: '2.0em',
            fontWeight:'bold',padding:'20px'}}>Say Hello</div>
            Thank you for your interest in our company. If you have any questions or comments, please don't hesitate to get in touch with us. You can reach us by phone, email, or by filling out the form below. We look forward to hearing from you!
            {/* Thank you for taking the time to visit our website and learn more about our company. We appreciate your interest and value your feedback. 
            If you have any questions about our products or services, or if you just want to share your thoughts or suggestions with us, 
            we encourage you to get in touch.
            You can call us during business hours to speak with one of our representatives. Or, you can send us an email.
            Alternatively, you can use the contact form provided below to send us a message. Simply fill out the form, and 
            we will get back to you as soon as we can. We look forward to hearing from you and assisting you in any way that we can. 
            Thank you again for your interest in our company. */}
        </div>
        <Container style={{paddingTop:'15px'}}>
        <Row>
          <Col className='revealfrombottom' sm={4} style={{paddingTop:'75px'}}>
          4409 EMDEN Street<br/>
            Silver Spring, MD, 20906<br/>
            <hr style={{width:"60%"}}/>
            Email<br/>
            trucking@ramtruckingroup.com<br/>
            Phone<br/>
            +1(240)4332947<br/>
          </Col>

          <Col sm={8}>
            <Contactus/>
          </Col>
        </Row>
      </Container>
        

        <Footer/>
      </div>
    )
  
}