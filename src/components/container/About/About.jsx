import React from 'react'
import "./About.scss";
// import CV from ' ../../../src/assets/Resume.pdf';
import CV from '../../../Resume.pdf';
import { motion } from 'framer-motion';
import { bios } from '../../../Data';
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
<div >
  
</div>
      <div className="about_container">
     

        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
            
            
          <motion.img src='https://res.cloudinary.com/diuoze6fm/image/upload/v1676416910/Portfolio/main_pic_ytfkbh.jpg'
            whileHover={{ y: -20, x: -15 }}
            transition={{ duration: 0.3 }}
          />
          

        </motion.div>
        
        <motion.div className="about_right"
        
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
      {/* <div className='gradient-03 '></div> */}


          <p>HI , I am Sailik Sarkar , I mostly work as a Front-end and Back-end developer . I have completed many projects and delivered it on time as per client needs . I mostly work on React,js , Next.js , React-Native . I have more than 3 years of experience . I have made more than 30 projects for my clients . I love developing MERN stack projects , Beautiful front-end designes and many more . Hope we will work together soon !! , thank you .  </p>
          
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          
          <motion.a href={'https://drive.google.com/file/d/1Gf0wqjfHKpFlu1ZHICobb73UPqG_Upft/view?usp=share_link'} target="_blank" download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
          {/* <div className='gradient-04 '></div> */}
        </motion.div>

      </div>

    </div>
  )
}

export default About