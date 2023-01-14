import React from 'react';
// import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import { Container, FormLabel } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <>
        <Form>
            <Container>
                <h2>Contact Us</h2>
                <Row>
                    <Col sm={6}>
                        <Form.Group className='mb-3'>
                            <FormLabel>First Name</FormLabel>
                            <Form.Control type='text' name='firstname' placeholder='Enter First name'/>
                        </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='mb-3'>
                            <FormLabel>Last Name</FormLabel>
                            <Form.Control type='text' name='lastname' placeholder='Enter Last name'/>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col sm={6}>
                        <Form.Group className='mb-3'>
                            <FormLabel>Email *</FormLabel>
                            <Form.Control type='text' name='email' placeholder='Enter Email'/>
                         </Form.Group>
                    </Col>
                    <Col sm={6}>
                        <Form.Group className='mb-3'>
                            <FormLabel>Subject</FormLabel>
                            <Form.Control type='text' name='subject' placeholder='Enter Subject'/>
                        </Form.Group>
                    </Col>
                </Row>
            
                <Row>
                    <Col sm={12} >
                        <Form.Group className='mb-3'>
                                <FormLabel>Message *</FormLabel>
                    
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave message here"
                                    style={{ height: '100px' }}
                                    required
                                    />
                            </Form.Group>
                    </Col>
                </Row>
                <button type="submit" className="btn btn-primary">Submit</button>
                        
        </Container>
        </Form>
    </>
  );
};
export default ContactUs;