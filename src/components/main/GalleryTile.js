import React, { Component } from 'react'

class GalleryTile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tileModifier: 'gallery-tile--invisible'
        }
        this.fadeIn = this.fadeIn.bind(this)
    }

    fadeIn() {
        const id = this.props.place
        const targetPosition = document.getElementById(id).getBoundingClientRect().top
        const viewHeight = window.innerHeight

        if (viewHeight > targetPosition && this.state.tileModifier === 'gallery-tile--invisible') {
            this.setState({
                tileModifier: ''
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.fadeIn()
        })
    }

    render() {
        return (
            <div className={`gallery-tile ${this.state.tileModifier} col-lg-3 col-md-6`} id={this.props.place}>
                <figure className='gallery-tile__image-container'>
                    <img
                        className='gallery-tile__image'
                        src={`images/${this.props.src}`}
                        alt={this.props.place}
                        title={this.props.credit}   
                    ></img>
                </figure>
                <h3 className='gallery-tile__title'>{this.props.place}</h3>
                <p className='gallery-tile__description'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        )
    }
}

export default GalleryTile
