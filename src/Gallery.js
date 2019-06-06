import React from 'react'
import GalleryTile from './GalleryTile'

function Gallery() {
    return (
        <section className="gallery container-fluid" id="gallery">
            <h2>Gallery</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div className="row">
                <GalleryTile
                    src="andres-sanz-100047-unsplash.jpg"
                    credit="Photo by Andrés Sanz on Unsplash"
                    place="Mexico"
                />
                <GalleryTile
                    src="jared-verdi-420154-unsplash.jpg"
                    credit="Photo by Jared Verdi on Unsplash"
                    place="Chile"
                />
                <GalleryTile
                    src="fernando-paredes-murillo-462122-unsplash.jpg"
                    credit="Photo by Fernando Paredes Murillo on Unsplash"
                    place="Morocco"
                />
                <GalleryTile
                    src="patrick-schneider-1062220-unsplash.jpg"
                    credit="Photo by Patrick Schneider on Unsplash"
                    place="Mongolia"
                />

            </div>
        </section>
    )
}

export default Gallery;    