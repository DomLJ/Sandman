import React from 'react'

function FooterAuthor() {
    return (
        <div className='footer__author'>
            <div className='row'>
                <div className='footer__signature col-md-9 col-12 d-flex flex-row justify-content-md-start justify-content-center'>
                    <p className='footer__signature-description'>Site created by&#160;</p>
                    <a className='footer__signature-link' href='https://github.com/DomLJ'>
                        Dominik Józefiak
                    </a>
                </div>

                <ul className='footer__social col-md-3 col-12 d-flex justify-content-md-end justify-content-center'>
                    <li className='footer__social-list' >
                        <a href='https://github.com/DomLJ/Sandman'>
                            <span className='footer__github fab fa-github'></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default FooterAuthor
