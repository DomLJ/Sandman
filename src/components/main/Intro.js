import React from 'react'

function Intro() {
    return (
        <section className='intro container-fluid' id='intro'>
            <div className='intro__container row'>
                <div className='intro__description col-lg-6 '>
                    <h2 className='intro__title text-center text-md-left'>
                        <span className='intro__title--underline'>World </span>
                            of
                        <span className='intro__title--color'> Deserts</span>
                    </h2>
                    <p className='intro__content'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p className='intro__content'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className='intro__image-container col-lg-6'>
                    <figure className='intro__figure'>
                        <img className='intro__image' src='./images/Mexico1200x800.jpg' alt='' ></img>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Intro
