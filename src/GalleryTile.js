import React, { Component } from 'react'

class GalleryTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: "invisible"
        }
    }

    fadeIn() {
        const id = this.props.place
        const div = document.getElementById(id)
        const targetPosition = div.getBoundingClientRect().top
        const viewHeight = window.innerHeight

        if (viewHeight > targetPosition && this.state.visibility === "invisible") {
            this.setState({
                visibility: "visible"
            })
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            this.fadeIn()
        })
    }

    render() {
        return (
            <div className={`tile-${this.state.visibility} col-lg-3 col-md-6`} id={this.props.place}>
                <figure>
                    <img src={`images/${this.props.src}`} alt="" title={this.props.credit}></img>
                </figure>
                <h3>{this.props.place}</h3>
                <p>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
        )
    }
}

export default GalleryTile;