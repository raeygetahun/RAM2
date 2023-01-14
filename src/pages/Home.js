
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react'
import Navbarcomp from '../components/Navbar'
import Testimonal from '../components/testimonal';
import Contactus from '../components/Contactus'
import Footer from '../components/Footer';
import mainimg1 from '../assets/images/truck0.png'
import Typewriter from 'typewriter-effect'
import { AiOutlineForm } from "react-icons/ai";
import { SiGooglemaps } from "react-icons/si";
import { AiTwotoneAccountBook } from "react-icons/ai"
import { TbSteeringWheel } from "react-icons/tb"
import { BsFillPatchCheckFill } from "react-icons/bs"
import shipper from '../assets/images/shipper.png'
import carrier from '../assets/images/Carrier.png'

import '../main.css'




export default function Home(){
   
    return (
      <div className='wrapper'>
         <div className='main'>
            <Navbarcomp/>
            <header className='imgbox wrapper1 parent'>
            <img className='mainimage' src={mainimg1} alt='.' height='100%' width='100%' id='mainimage'/>
              <section className='hero-header-text h1 title'>
                  <div className='centered' style={{fontWeight: "bold"}}>
                  <Typewriter options={{
                    loop: true,
                    }}
                    onInit={(typewriter)=>{
                    typewriter.typeString("Welcome to RAM TRUCKING <br/>GROUP!")
                    .start().pauseFor(700).deleteAll().start()
                    typewriter.typeString("The best is the least we can do.")
                    .start().pauseFor(700).deleteAll().start()
                    typewriter.typeString("We set the standards others<br/> try to live up to!")
                    }}/></div>
              </section>
            </header>

            {/* <div className='imgbox wrapper1'>
              <div className='OpacityGradient'>
                <img src={mainimg} alt='.' height='auto' width='100%' id='mainimage'/>
              </div>
                
                <div className="img h1 d-none d-sm-block title">
                    <Typewriter 
                    onInit={(typewriter)=>{
                        typewriter.typeString("Welcome to RAM TRUCKING <br/>GROUP!")
                        .start()
                    }}/> 
                </div>
            </div> */}
          </div>
        <div style={{backgroundColor:"rgb(187, 196, 205)"}}>
          <div className='main shippercarrier'>
              <Container>
                <Row>
                  <Col xs={6} >
                     <h1>I am a shipper</h1>
                     <SiGooglemaps/> Truck a load<br/>
                     <AiOutlineForm/> Get a quote
                     
                  </Col>

                  <Col xs={6} >
                      <h1>I am a carrier</h1>
                      <AiTwotoneAccountBook/> Book a load<br/>
                      <TbSteeringWheel/> Become a carrier
                  </Col>
                </Row>
              </Container>
          </div>
          
        
          <Container className='cont' >
            <Row style={{height: '200px'}}>
              <Col className='shipperimg d-none d-sm-block revealfromleft'>
                <img style={{margin:'-50px 0px 30px 40px'}} alt=''src={shipper} height='95%' width='60%'/>
              </Col>
              <Col className='fortxt revealfrombottom' >
                <span style={{fontSize: '1.4em',
                fontWeight:'bold'}}>For shippers:</span><br/>
                <BsFillPatchCheckFill/> Instantly quote and book freight<br/>
                <BsFillPatchCheckFill/> Complete freight visibility with 24/7 tracking<br/>
                <BsFillPatchCheckFill/> On-demand access to shipping documents<br/>
                <BsFillPatchCheckFill/> Customizable reports<br/>    
                <i icon="fa-solid fa-square-check" />
                  
          
              </Col>
            </Row>

            <Row style={{height: '200px'}}>

              <Col className='fortxt revealfromleft'>
                <span style={{fontSize: '1.4em',
                fontWeight:'bold'}}>For carrier:</span><br/>
                <BsFillPatchCheckFill/> Instantly book loads from loadboard<br/>
                <BsFillPatchCheckFill/> GPS tracking<br/>
                <BsFillPatchCheckFill/> 'Recommended loads' option<br/>
                <BsFillPatchCheckFill/> Fleet management<br/>
                <BsFillPatchCheckFill/> Trip information<br/>
              </Col>

              <Col  className='forimg d-none d-sm-block revealfrombottom'>
                <img style={{margin:'-50px 0px 30px 0px'}} alt='' src={carrier} height='auto' width='60%'/>
              </Col>

            </Row>

            <Row>
                <Col className='revealfrombottom' sm={3} style={{fontSize:"1.7em", fontWeight:"bold",paddingTop:'80px'}}>
                  What People Say<br/> About Us
                </Col>
                <Col sm={9}>
                  <Testimonal/>
                </Col>
              </Row>
              
          </Container>
          </div>
      {/* <div className='main testimonal ps-5 pe-5' style={{height: '200px', border:'1px solid red'}}>
        <Container style={{float:"right", border:'1px solid red'}}>
          <Row>
            <Col sm={3} style={{fontSize:"1.6em", padding:'70px 0px 0px 0px'}}>
              What People Say<br/> About Us
            </Col>
            <Col sm={9}>
              <Testimonal/>
            </Col>
          </Row>
        </Container> */}
        {/* <span style={{fontSize:"1.7em", position:"absolute", marginTop:"70px"}}> What People Say<br/> About Us </span>
        <span style={{width: "80%",position:"absolute", marginLeft:"20%"}}><Testimonal/></span> */}
      {/* </div> */}

      <Container style={{clear:"both", paddingTop:'15px'}}>
        <Row>
          <Col sm={4}>
            4409 EMDEN Street<br/>
            Silver Spring, MD, 20906<br/>
            trucking@ramtruckingroup.com<br/>
            +01087762<br/>
            +01823489
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
