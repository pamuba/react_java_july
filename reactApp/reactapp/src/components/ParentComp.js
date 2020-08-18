import React, { Component } from 'react'
import PureCom from './PureCom'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"React"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"React"
            })
        }, 2000)
    }
    render() {
        console.log("***********************Parent Comp Render*****************************")
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name}></RegularComp>
                <PureCom name={this.state.name}></PureCom>
            </div>
        )
    }
}

export default ParentComp
