import React from 'react'
import Counter from './Counter'

function Statistics() {
    return (
        <section className='statistics container-fluid' id='statistics'>
            <h2 className='statistics__title text-center'>Gobi Desert</h2>
            <div className='statistics__counter-container row'>
                <Counter countedNumber={122} duration={500} beginning={0} id={1} unit='&#176;F' />
                <Counter countedNumber={5184} duration={600} beginning={0} id={2} unit='ft above sea level' />
                <Counter countedNumber={498259} duration={700} beginning={0} id={3} unit='square miles' />
            </div>
        </section>
    )
}

export default Statistics
