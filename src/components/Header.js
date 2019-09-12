import React, { Component } from 'react'
import NavbarListItem from './NavbarListItem'

class Header extends Component {
    constructor() {
        super()
        this.state = {
            navBackground: ''
        }
        this.toggleNavBackgroundColor = this.toggleNavBackgroundColor.bind(this)
        this.backgroundColorOn = this.backgroundColorOn.bind(this)
        this.backgroundColorOff = this.backgroundColorOff.bind(this)
    }

    toggleNavBackgroundColor() {
        if (window.scrollY > 5) {
            this.backgroundColorOn()
        } else {
            this.backgroundColorOff()
        }
    }

    backgroundColorOn() {
        this.setState({
            navBackground: 'nav-scrolled'
        })
    }

    backgroundColorOff() {
        this.setState({
            navBackground: ''
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.toggleNavBackgroundColor()
        })
    }

    render() {
        return (
            <header className='header col-lg-12' id='#'>
                <div className='header-container'>
                    <nav className={`navbar navbar-expand-lg fixed-top navbar-dark ${this.state.navBackground}`}>
                        <a className='navbar-brand col-lg-1 text-lg-center col-1 text-center text-light logo' href='#'>Sandman</a>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-toggle='collapse'
                            data-target='#collapsibleNavbar'
                            onClick={this.backgroundColorOn}
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='col-lg-7 offset-lg-4 collapse navbar-collapse' id='collapsibleNavbar'>
                            <ul className='navbar-nav col-lg-12 justify-content-between'>
                                <NavbarListItem name='Intro' link='#intro' />
                                <NavbarListItem name='Gallery' link='#gallery' />
                                <NavbarListItem name='Statistics' link='#statistics' />
                                <NavbarListItem name='Footer' link='#footer' />
                            </ul>
                        </div>
                    </nav>
                </div>

                <section className='offset-1 col-md-3 col-sm-5 col-9'>
                    <h1>Wonderful World Of Desert Templates</h1>
                </section>

                <div className='header__arrow'>
                    <a href='#intro'>
                        <i className='fa fa-angle-down'></i>
                    </a>
                </div>
            </header>
        )
    }
}

export default Header