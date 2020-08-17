import React, { Component } from 'react'
import UpdateComponent from './withCounter'

class ClickCounter extends Component {
   
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter)
