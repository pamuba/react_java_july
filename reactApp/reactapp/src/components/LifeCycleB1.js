import React, { Component } from 'react'

export class LifeCycleB1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"React"
        }
        console.log("LifeCycleB1 constuctor")
    }

    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB1  getDerivedStateFromProps")
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB1 componentDidMount")
    }

    render() {
        console.log("LifeCycleB1 Render")
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleB1
