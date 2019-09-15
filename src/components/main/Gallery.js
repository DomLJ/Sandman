import React from 'react'
import GalleryTile from './GalleryTile'

function Gallery() {
    return (
        <section className='gallery container-fluid' id='gallery'>
            <h2 className='gallery__title text-center'>Gallery</h2>
            <p className='gallery__description text-center'>Lorem ipsum dolor sit amet consectetur</p>
            <div className='gallery__content row'>
                <GalleryTile
                    src='MexicoTile.jpg'
                    credit='Photo by Andrés Sanz on Unsplash'
                    place='Mexico'
                />
                <GalleryTile
                    src='AtacamaTile.jpg'
                    credit='Photo by Jared Verdi on Unsplash'
                    place='Chile'
                />
                <GalleryTile
                    src='MoroccoTile.jpg'
                    credit='Photo by Fernando Paredes Murillo on Unsplash'
                    place='Morocco'
                />
                <GalleryTile
                    src='GobiTile.jpg'
                    credit='Photo by Patrick Schneider on Unsplash'
                    place='Mongolia'
                />
            </div>
        </section>
    )
}

export default Gallery
