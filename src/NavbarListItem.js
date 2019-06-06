import React from 'react'

function NavbarListItem(props) {
    return (
        <li
            className="nav-item text-center"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
        >
            <a
                className="nav-link text-light"
                href={props.link}
            >
                {props.name}
            </a>
        </li>
    )
}

export default NavbarListItem;