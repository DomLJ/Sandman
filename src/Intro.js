import React from 'react'


function Intro() {
    return (
        <section className="intro container-fluid" id="intro">
            <div className="intro-container row">
                <div className="intro-theme col-lg-6 ">
                    <h2 className="text-center text-md-left">
                        <span className="span-underline">World</span> of <span className="span-color">Deserts</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>

                <div className="intro-photo col-lg-6 ">
                    <figure className="img-container">
                        <img src="./images/andres-sanz-100047-unsplash.jpg" alt="" ></img>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Intro;