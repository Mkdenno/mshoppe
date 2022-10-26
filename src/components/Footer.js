import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='container'>
      <div className="Newsletter">
      <h2>NewsLetter</h2>
      <div className="inputform">
      <input type='text' placeholder='NewsLetter' /><button>Subscribe</button>
      </div>
      </div>
        <div className='footerthings'>

        <div>
          <h5>Quick Links</h5>
          <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Orders</li>
          <li>About</li>
          <li>Contact Us</li>
          </ul>
        </div>
        <div>
        <h5>Extra Links</h5>
        <ul>
          <li>Fevorites</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          <li>one</li>
          </ul>
        </div>
        <div>
        <h5>Devices Available</h5>
        <ul>
          <li>Samsung</li>
          <li>Huawei</li>
          <li>Tecno</li>
          <li>Oppo</li>
          <li>Iphone</li>
          </ul>
        </div>
        <div>
        <h5>Primary Contact</h5>
        <ul>
          <li>Email: mshpper22@gmail.com</li>

          <li>Phone: +254798210671</li>
          </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer