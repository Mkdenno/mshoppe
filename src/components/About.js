import React from 'react'
import "./about.css"

const About = () => {
  return (
    <section id='about' className='intro-about'>  
<div className='container'> 
        <div className='row aboutus'>
        <div className='col-8 image'>
                <img src="./images/abt.avif" alt='Img'/>
            </div>
            <div className='col-4 About'> 
                <h1>About Us</h1>
                <p>MoShopper offers you a way to filter the best deals for electronics.We've sorted these deals by price, so all you have to do is decide how much you want to spend. The specifications vary, too, so there's something for everyone whether you plan to use your laptop for gaming, work, school, or just need a portable option for checking your email.</p>
            </div>

        </div>
    </div>
     </section>
    
  )
}

export default About