import React , {useRef} from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8s7b4ss', 'template_bodg9v6', form.current, 'a1G0z_DB4DjjkK6Dm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Say Hi</h3>
          <p className='contact_text'>If you have any quaries related to your project , and want to discuss with me , feel free to contact . I will come back to you as soon as possible , thank you !</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          {/* <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div> */}
        </motion.div>


 





        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >

<h3>Get In Touch</h3>

<form ref={form} onSubmit={sendEmail} className='contact__form'>

       
          <div className="row">
            <input type="text"  name='Firstname' placeholder='First Name' />
            <input type="text"  name='Lastname' placeholder='Last name'/>
          </div>
          <div className="row">
            <input type="text"  name='phone' placeholder='Phone' />
            <input type="email"  name='email' placeholder='Email' />
          </div>
          <div className="row">
            <textarea name="message" placeholder='message'></textarea>
          </div>


          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className=""
          >
          
            <button className='btn'>  Send</button>
          </motion.div>
          </form>

        </motion.div>
      </div>
    </div>
  )
}

export default Contact