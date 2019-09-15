import React from 'react'
import FooterAbout from './FooterAbout'
import FooterLinks from './FooterLinks'
import FooterAuthor from './FooterAuthor'

function Footer() {
    return (
        <footer className='footer' id='footer'>
            <div className='footer__container container'>
                <div className='row'>
                    <FooterAbout />
                    <FooterLinks />
                </div>
                <FooterAuthor />
            </div>
        </footer>
    )
}

export default Footer
