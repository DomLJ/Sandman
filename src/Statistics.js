import React from 'react'
import Counter from './Counter'

function Statistics() {
    return (
        <section className="statistics container-fluid" id="statistics">
            <h1 className="text-center">Gobi Desert</h1>
            <div className="counter-container row">
                <Counter countedNumber={122} duration={700} beginning={0} id={1} unit="&#176;F" />
                <Counter countedNumber={5184} duration={800} beginning={0} id={2} unit="ft above sea level" />
                <Counter countedNumber={498259} duration={900} beginning={0} id={3} unit="sqare miles" />
            </div>
        </section>
    )
}

export default Statistics;