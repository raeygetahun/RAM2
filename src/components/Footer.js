
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
       
        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 revealfromright'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Ram Trucking Group
              </h6>
              <p> 
              We are committed to safety and has a strong track record of on-time delivery. 
              We are known for our excellent customer service and ability to meet the unique shipping needs of our clients. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 revealfrombottom'>
              <h6 className='text-uppercase fw-bold mb-4'>Quick Link</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Service
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Employment
                </a>
              </p>
            </MDBCol>
      
            <MDBCol md="4" lg="5" xl="4" className='mx-auto mb-md-0 mb-4 revealfromtop'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <MDBRow className='mt-3'>
              <MDBCol sm='5'>
              4409 EMDEN Street<br/>
            Silver Spring, MD, 20906<br/>
              </MDBCol>
              <MDBCol sm='7'>
                trucking@ramtruckingroup.com<br/>
                +1(240)4332947<br/>
                +01823489
              </MDBCol>
              </MDBRow>
            </MDBCol>

          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©2022 Copyright:{' '} 
        <a className='text-reset fw-bold' target='_blank'  href='https://ramtruckingroup.com/'>
          RAM Trucking Group
          <br/>
          
        </a>
        <span style={{fontSize:'0.8em', display:'inline'}}>
            Developed By {' '} 
            <a className='text-reset' target='_blank' href='https://raeygetahun.github.io/'>
            Raey Getahun
            </a>
        </span>
      </div>
    </MDBFooter>
  );
}