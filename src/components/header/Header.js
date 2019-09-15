import React from 'react'
import Navbar from './Navbar'

function Header() {
    return (
        <header className='header col-lg-12' id='#'>
            <Navbar />

            <section className='header__title-container offset-1 col-md-3 col-sm-5 col-9'>
                <h1 className='header__title'>Wonderful World Of Desert Templates</h1>
            </section>

            <div className='header__scrolldown'>
                <a className='header__link' href='#intro'>
                    <span className='header__arrow'></span>
                </a>
            </div>
        </header>
    )
}

export default Header
