import React, { Component } from 'react'
import updatedComponent from './withCounter1'

export class ClickCounter1 extends Component {
    
    render() {
        // const { count } = this.state
        const {count, increment} = this.props
        return (
            <div>
                <button onClick={increment}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default updatedComponent(ClickCounter1)
