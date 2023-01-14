import React from 'react'
import Footer from '../components/Footer';
import Navbarcomp from '../components/Navbar'
import './about.css'
import '../main.css'

export default function Service(){
    return (
      <div className='main'>
        <Navbarcomp/>
        <div style={{padding:"20px"}}>
        <span style={{textAlign:'center'}}>
          There are many trucking services to choose from, 
        each with its own benefits and drawbacks.
        To ensure that your goods are delivered efficiently, securely,
        and at a reasonable cost, it's important to understand the options
        available to you. Once you understand your options, you can choose
        the trucking method that best suits the needs of your business.
        </span>
        <h4>LTL or Partial Truckload</h4>

        Less than Truckload (LTL) shipping is a good option for shippers 
        whose cargo is more than 100lbs but does not fill an entire truck. 
        With LTL shipping, shippers can share space on a truck with other 
        shippers, only paying for the space they use. This can be a 
        cost-effective way to transport goods over land that don't 
        require an entire truck. However, LTL shipping may not offer as 
        much control over shipping routes and timing, as the cargo space 
        is shared with other shippers.
        <h4>FTL or Full Truckload</h4>
        Full Truckload is a great shipping option when you have a shipment
         that fills a full freight trailer (typically measuring 8’-8.5’ wide,
          12.5’-13.5’ high, and 40’-53’ long) or you need a dedicated truck
           trailer just for your goods. Selecting to ship FTL allows you to
            have more control over truck route and timing than LTL shipping. 
        <h4>Flat Bed Trucking Service</h4>
        Flat bed trucks are ideal for easy loading and unloading of cargo. 
        This type of truck is ideal for transporting goods already packaged 
        into shipping containers, vehicles or other materials that are not 
        susceptible to weather. Industries such as construction and farming 
        industry typically use flatbed trucking services to ship their oversized 
        machinery and building supplies.
        <h4>Refrigerated Trucks or Reefer Trucks</h4>
        Temperature controlled trucking services are needed to move perishable goods. 
        These trucks are ideal for shipping produce, meats, cheeses, fish and poultry. 
        The pharmaceutical, medical and chemical industry also use temperature 
        controlled trucks to move their perishable cargo. These special types 
        of trucks can allow you to control a variety of conditions, such as 
        temperature and humidity. They also allow for special monitoring and 
        tracking giving you peace of mind and offer FTL or LTL options.
        <h4>Expedited Trucking Service</h4>
        This is also known as Straight Truck Delivery Service and is a 
        method for getting cargo from Point A to Point B in a hurry anywhere 
        and anytime. This method is useful when cargo is too large or too 
        fragile to ship by air freight, but still needs to get to its 
        destination fast. 
        </div>
        <Footer/>
      </div>
    )
  
}