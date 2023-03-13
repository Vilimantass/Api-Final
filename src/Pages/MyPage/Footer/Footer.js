import React from 'react'
import FbLogo from '../../../Logos/social-facebook-icon.png'
import './Footer.scss'

export const Footer = () => {
    return (

        <footer>
            <div className='footerWrapper'>
                <div>
                    <h3>Susisiekite su manimi</h3>
                </div>
                <div>
                    <p>Telefonu <a href="tel: +3706*******"> +3706******* </a> </p>
                </div>
                <div>
                    <p>El.paštu <a href="vilimantas****@gmail.com"> vilimantas****@gmail.com</a> </p>
                </div>
                <div><a href="https://www.facebook.com/"><img src={FbLogo} alt="Facebook" /></a>
                </div>

            </div>
        </footer>

    )
}

export default Footer