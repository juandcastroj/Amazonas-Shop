import React from 'react'
import logo from '../images/logo-amazon.svg'
import '../style/footerStyle.css'

const Footer = () => {
    return (
        <div>

            <div class="footer">
                <div class="contain">
                  
                    <div class="col">
                        <h1>Products</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Get in touch</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Accounts</h1>
                        <ul>
                            <li>About</li>
                            <li>Mission</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Resources</h1>
                        <ul>
                            <li>Webmail</li>
                            <li>Site map</li>
                           
                        </ul>
                    </div>
                    <div class="col">
                        <h1>Support</h1>
                        <ul>
                            <li>Contact us</li>
                            <li>Web chat</li>
                            
                        </ul>
                    </div>
                    <div className="col">
                        <img   src={logo} alt=''   />
                    </div>
                    <div class="clearfix"></div>
                </div>
            </div>
        </div>
    )
}

export default Footer