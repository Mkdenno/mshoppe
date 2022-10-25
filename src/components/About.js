import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section id='about'>  
<div className='container'> 
        <div className='row aboutus'>
            <div className='col-7'> 
                <h1>About Us</h1>
                <p>We've sorted these deals by price, so all you have to do is decide how much you want to spend. The specifications vary, too, so there's something for everyone whether you plan to use your laptop for gaming, work, school, or just need a portable option for checking your email.</p>
            </div>
            <div className='col-5'>
                <img src="./images/phone2.jpeg"/>
            </div>
        </div>
    </div>
     </section>
    
  )
}

export default About