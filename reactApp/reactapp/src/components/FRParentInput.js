import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    
        this.state = {
             
        }
    }

    handler = () => {
        this.inputRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}></FRInput>
                <button onClick={this.handler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
