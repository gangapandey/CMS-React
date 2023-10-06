import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer>       
        <div className="footer-content">
            <div className="newsletter">
                <div className="one">
                <h2>Join Our Newsletter</h2>
                <p>Subscribe to our newsletter to receive updates and special offers.</p>
                </div>
                <form>
                    <input type="email" placeholder="Enter your email" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="additional-info">
            <p>&copy; 2023 Content Management System</p>
            <p><a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
        </div>
    </footer>

      
    </div>
  )
}

export default Footer
