import React, { Component } from 'react'
import LifeCycleB1 from './LifeCycleB1'

export class LifeCycleA1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"React"
        }
        console.log("LifecycleA constuctor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifecycleA  getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")
    }

    render() {
        console.log("LifecycleA Render")
        return (
            <div>
                <LifeCycleB1></LifeCycleB1>
            </div>
        )
    }
}

export default LifeCycleA1
