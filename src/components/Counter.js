import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.beginning,
            iteration: 1,
            isCounterTriggered: false
        }
        this.countUp = this.countUp.bind(this)
    }

    countUp() {
        const { countedNumber, duration, beginning } = this.props
        const iteration = this.state.iteration / duration

        this.setState(prevState => ({
            counter: Math.round(-countedNumber * iteration * (iteration - 2) + beginning),
            iteration: prevState.iteration + 1
        }))
        if (this.state.counter < countedNumber) setTimeout(this.countUp, 3)
    }

    counterTrigger() {
        const id = 'counter' + this.props.id
        const div = document.getElementById(id)
        const targetPosition = div.getBoundingClientRect().top
        const viewHeight = window.innerHeight

        if (viewHeight > targetPosition && !this.state.isCounterTriggered) {
            this.setState({
                isCounterTriggered: true
            })
            this.countUp()
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.counterTrigger()
        })
    }

    render() {
        return (
            <div className='counter col-lg-4'>
                <h3 className='counter__value text-center' id={`counter${this.props.id}`} >{this.state.counter.toLocaleString()}</h3>
                <p className='counter__unit text-center'>{this.props.unit}</p>
            </div>
        )
    }
}

export default Counter
