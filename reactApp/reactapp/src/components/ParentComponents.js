import React, { Component } from 'react'
import MemoCom from './MemoCom'
import PureComp from './PureComp'
import RegComponent from './RegComponent'

class ParentComponents extends Component {
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
        console.log("**************************************Parent Component************************")
        return (
            <div>
                Parent Component
                {/* <RegComponent name={this.state.name}></RegComponent>
                <PureComp name={this.state.name}></PureComp> */}
                <MemoCom name={this.state.name}></MemoCom>
            </div>
        )
    }
}

export default ParentComponents
