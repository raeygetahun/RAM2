import React from 'react'
import Footer from '../components/Footer';
import Navbarcomp from '../components/Navbar'
import { GrCheckmark } from "react-icons/gr";
import driver from "../assets/images/driver.jpg"
import require from "../assets/images/require.jpg"
import './about.css'

export default function Service(){
   
    return (
      <div className='main'>
        <Navbarcomp/>

        <div className='float-end' style={{padding:'20px 170px 20px 0px'}}>
        
            <h1>Our Offer</h1>
            <GrCheckmark/> 48c Starting Pay<br/>
            <GrCheckmark/> Paid Vacation<br/>
            <GrCheckmark/> Medical/ Dental<br/>
            <GrCheckmark/> Safety Bonuses<br/>            
            <GrCheckmark/> Newer Equipment<br/>            
            <GrCheckmark/> 2700+ Miles Weekly<br/>            
            <GrCheckmark/> Weekly Home Times<br/>
            <GrCheckmark/> Safety Bonuses<br/>
        </div>
        <img className='shipperimg d-none d-sm-block' style={{marginTop:'-10px'}} src={driver} alt='.' height='auto' width='50%' id='mainimage'/>

        <img className='float-end  d-none d-sm-block' style={{}} src={require} alt='.' height='auto' width='50%' id='mainimage'/>
        <div className='d-none d-sm-block' style={{padding:'50px 0px 0px 80px',height:'332px'}}>
        
            <h1>Requirements</h1>
            <GrCheckmark/> 25 years of age<br/>
            <GrCheckmark/> 2+ yrs of experience<br/>
            <GrCheckmark/> Clean PSP and MVR records<br/>
            <GrCheckmark/> Must pass review of safety record!<br/><br/>  
            <a className='revealfromleft' style={{display: 'inline-block',textAlign:'center',fontSize:"1.5em",padding:'5px',
             width: '200px', backgroundColor: "lightblue", color: "#000", borderRadius: "8px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.18)"}} rel="noreferrer"
              target='_blank'href='http://www.mydriverfiles.com/ram-trucking-group-llc/apply/'>Apply</a>
        </div>

        <div className='float-end shipperimg d-block d-sm-none' style={{padding:'80px 69px 0px 0px'}}>
            
            <h1>Requirements</h1>
            <GrCheckmark/> 25 years of age<br/>
            <GrCheckmark/> 2+ yrs of experience<br/>
            <GrCheckmark/> Clean PSP and MVR records<br/>
            <GrCheckmark/> Must pass review of safety record!<br/><br/>  
            <a className='revealfromleft' style={{display: 'inline-block',textAlign:'center',fontSize:"1.5em",padding:'5px',
             width: '200px', backgroundColor: "lightblue", color: "#000", borderRadius: "8px", boxShadow: "0 3px 5px rgba(0, 0, 0, 0.18)"}} rel="noreferrer"
              target='_blank'href='http://www.mydriverfiles.com/ram-trucking-group-llc/apply/'>Apply</a>
        </div>
        
        <Footer/>
      </div>
    )
  
}