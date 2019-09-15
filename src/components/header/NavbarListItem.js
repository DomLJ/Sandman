import React from 'react'

function NavbarListItem(props) {
    const toggleOn = props.isScreenWide ? '' : 'collapse'
    return (
        <li
            className='nav-item text-center'
            data-toggle={toggleOn}
            data-target='#collapsibleNavbar'
        >
            <a
                className='navbar__link nav-link text-light'
                href={props.link}
            >
                {props.name}
            </a>
        </li>
    )
}

export default NavbarListItem
