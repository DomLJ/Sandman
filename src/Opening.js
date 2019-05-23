import React from 'react'
import OpeningTile from './OpeningTile'

function Opening() {
    return (
        <section className="opening container-fluid">
            <h2>Opening</h2>
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div className="row">
                <OpeningTile
                    src="andres-sanz-100047-unsplash.jpg"
                    credit="Photo by Andrés Sanz on Unsplash"
                    place="Mexico"
                />
                <OpeningTile
                    src="jared-verdi-420154-unsplash.jpg"
                    credit="Photo by Jared Verdi on Unsplash"
                    place="Chile"
                />
                <OpeningTile
                    src="fernando-paredes-murillo-462122-unsplash.jpg"
                    credit="Photo by Fernando Paredes Murillo on Unsplash"
                    place="Morocco"
                />

            </div>
        </section>
    )
}

export default Opening;    