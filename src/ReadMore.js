import React from 'react'

function ReadMore() {
    return (
        <section className="read-more">
            <div className="text-container col-lg-6 offset-lg-5">
                <h3 className="text-lg-left text-center">Sahara Desert</h3>
                <p className="text-lg-left text-center">
                    Consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="col-12 button-container">
                    <button className="col-10 offset-1 col-lg-4 offset-lg-8">Read More</button>
                </div>
            </div>
        </section>
    )
}

export default ReadMore;