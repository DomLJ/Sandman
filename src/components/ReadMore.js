import React from 'react'

function ReadMore() {
    return (
        <section className='read-more'>
            <div className='read-more__container text-container col-lg-6 offset-lg-5'>
                <h3 className='read-more__title text-lg-left text-center'>Sahara Desert</h3>
                <p className='read-more__content text-lg-left text-center'>
                    Consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <button className='read-more__button col-10 offset-1 col-lg-4 offset-lg-8'>Read More</button>

            </div>
        </section>
    )
}

export default ReadMore
