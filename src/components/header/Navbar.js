import React, { Component } from 'react'
import NavbarListItem from './NavbarListItem'

class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            navBackground: '',
            isScreenWide: true
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
            navBackground: 'navbar--scrolled'
        })
    }

    backgroundColorOff() {
        const isNavCollapsed = document.getElementById('navbar-toggler').classList.contains('collapsed')
            ? true : false
        if (isNavCollapsed) {
            this.setState({
                navBackground: ''
            })
        }
    }

    checkWidth() {
        if (window.innerWidth > 992) {
            this.setState({
                isScreenWide: true
            })
        } else {
            this.setState({
                isScreenWide: false
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.toggleNavBackgroundColor()
        })
        window.addEventListener('resize', () => {
            this.checkWidth()
        })
        this.checkWidth()
    }

    render() {
        return (
            <nav className={`navbar ${this.state.navBackground} navbar-expand-lg fixed-top navbar-dark`}>
                <a className='navbar__logo navbar-brand col-lg-1 text-lg-center col-1 text-center text-light' href='#'>Sandman</a>
                <button
                    id='navbar-toggler'
                    className='navbar-toggler collapsed'
                    type='button'
                    data-toggle='collapse'
                    data-target='#collapsibleNavbar'
                    onClick={this.backgroundColorOn}
                >
                    <span className='navbar-toggler-icon'></span>
                </button>

                <div className='col-lg-7 offset-lg-4 collapse navbar-collapse' id='collapsibleNavbar'>
                    <ul className='navbar-nav col-lg-12 justify-content-between'>
                        <NavbarListItem name='Intro' link='#intro' isScreenWide={this.state.isScreenWide} />
                        <NavbarListItem name='Gallery' link='#gallery' isScreenWide={this.state.isScreenWide} />
                        <NavbarListItem name='Statistics' link='#statistics' isScreenWide={this.state.isScreenWide} />
                        <NavbarListItem name='Footer' link='#footer' isScreenWide={this.state.isScreenWide} />
                    </ul>
                </div>

            </nav >
        )
    }
}

export default Navbar
