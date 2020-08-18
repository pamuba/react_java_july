import React, { Component } from 'react'
import updatedComponent from './withCounter1'

export class HoverCounter1 extends Component {
   
    render() {
        const {count, increment} = this.props
        return (
            <div>
                <h2 onMouseOver={increment}>Hovered {count} Times</h2>
            </div>
        )
    }
}

export default updatedComponent(HoverCounter1)
