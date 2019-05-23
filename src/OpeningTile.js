import React from 'react';

function OpeningTile(props) {
    return (
        <div className="tile col-lg-4 ">
            <div className="img-container">
                <img src={`images/${props.src}`} alt="" title={props.credit}></img>
            </div>
            <h3>{props.place}</h3>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    )
}

export default OpeningTile;