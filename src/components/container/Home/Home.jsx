import React from 'react'
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5 
        }
      }
    >

      
      <div className="profile_text">
      
       
        <span className='text'>Hi, This is<br />“Sailik Sarkar.” </span>
        <span className='job'>Web Developer , App Developer</span>

        <motion.a className='btn'
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
          contact me</motion.a>
       
      </div>
    </motion.div>
  )
}

export default Home
