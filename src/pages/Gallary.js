import React from 'react'
import Footer from '../components/Footer';
import Navbarcomp from '../components/Navbar'
import './about.css'
import PhotoAlbum from "react-photo-album";
import image3 from '../assets/images/image3.JPG'
import image4 from '../assets/images/image4.JPG'
import image5 from '../assets/images/image5.JPG'
import image6 from '../assets/images/image6.JPG'
import image7 from '../assets/images/image7.JPG'
import image8 from '../assets/images/image8.JPG'
import image9 from '../assets/images/image9.JPG'
import image10 from '../assets/images/image10.JPG'
import image11 from '../assets/images/image11.JPG'
import image12 from '../assets/images/image12.JPG'
import image13 from '../assets/images/image13.JPG'
import image14 from '../assets/images/image14.JPG'


const photos=[
  
  {src: image8, width: 1284, height: 1712,},
  {src: image3, width: 1284, height: 963,},
  {src: image6, width: 768, height: 1024,},
  {src: image5, width: 1284, height: 722,},
  {src: image4, width: 1284, height: 722,},
  {src: image7, width: 947, height: 552,},
  {src: image12, width: 1284, height: 963,},
  {src: image9, width: 1284, height: 1712,},
  {src: image10, width: 1284, height: 1712,},
  {src: image11, width: 1284, height: 963,},
  {src: image14, width: 1284, height: 963,},
  {src: image13, width: 1284, height: 1712,},

];




export default function Gallary()
   {
    
    return (
      <div className='main'>
        <Navbarcomp/>
    
       


<PhotoAlbum layout="rows" photos={photos} />
    <Footer/>
      </div>
  )
}
  