import React from 'react'

function Footer() {
    return (
        <footer id='footer'>
            <div className='container'>
                <div className='row'>

                    <div className='footer-about col-md-5'>
                        <h5 className='text-center text-md-left'>
                            About
                        </h5>
                        <p className='text-justify'>
                            This site is example template,
                            it was created using React and Bootstrap.
                            It's purpose was to be training task for me so
                            I could improve my styling skills and usage of Bootstrap.
                            Feel free to use it as you please.
                        </p>
                    </div>

                    <div className='col-md-3 offset-md-1 col-6 text-md-left text-center'>
                        <h5>Links</h5>
                        <ul>
                            <li><a href='#placeholder'>example link 1</a></li>
                            <li><a href='#placeholder'>example link 2</a></li>
                            <li><a href='#placeholder'>example link 3</a></li>
                            <li><a href='#placeholder'>example link 4</a></li>
                        </ul>
                    </div>

                    <div className='col-md-3 col-6 text-md-left text-center'>
                        <h5>Links</h5>
                        <ul>
                            <li><a href='#placeholder'>example link 1</a></li>
                            <li><a href='#placeholder'>example link 2</a></li>
                            <li><a href='#placeholder'>example link 3</a></li>
                            <li><a href='#placeholder'>example link 4</a></li>
                        </ul>
                    </div>
                </div>

                <div className='footer-ending'>
                    <div className='row'>
                        <div className='signature col-md-9 col-12 d-flex flex-row justify-content-md-start justify-content-center'>
                            <p>
                                Site created by&#160;
                            </p>
                            <a
                                href='https://github.com/DomLJ'
                            >
                                Dominik Józefiak
                            </a>
                        </div>

                        <ul className='social col-md-3 col-12 d-flex justify-content-md-end justify-content-center'>
                            <li>
                                <a
                                    href='https://github.com/DomLJ/Sandman'
                                >
                                    <i className='fab fa-github'></i>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
