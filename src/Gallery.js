import React from 'react'
import GalleryTile from './GalleryTile'

function Gallery() {
    return (
        <section className="gallery container-fluid" id="gallery">
            <h1>Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div className="row">
                <GalleryTile
                    src="MexicoTile.jpg"
                    credit="Photo by Andrés Sanz on Unsplash"
                    place="Mexico"
                />
                <GalleryTile
                    src="AtacamaTile.jpg"
                    credit="Photo by Jared Verdi on Unsplash"
                    place="Chile"
                />
                <GalleryTile
                    src="MoroccoTile.jpg"
                    credit="Photo by Fernando Paredes Murillo on Unsplash"
                    place="Morocco"
                />
                <GalleryTile
                    src="GobiTile.jpg"
                    credit="Photo by Patrick Schneider on Unsplash"
                    place="Mongolia"
                />
            </div>
        </section>
    )
}

export default Gallery;    