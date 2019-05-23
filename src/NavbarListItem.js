import React from 'react'

function NavbarListItem(props) {
    return (
        <li className="nav-item text-center">
            <a
                className="nav-link text-light"
                href="#"
                data-toggle="collapse"
                data-target="#collapsibleNavbar">Link {props.name}</a>
        </li>
    )
}

export default NavbarListItem;