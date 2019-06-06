import React from 'react';

function GalleryTile(props) {
    return (
        <div className="tile col-lg-3">
            <figure>
                <img src={`images/${props.src}`} alt="" title={props.credit}></img>
            </figure>
            <h3>{props.place}</h3>
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    )
}

export default GalleryTile;