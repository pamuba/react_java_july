import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             topic:'angular'
        }
    }
    handler = (event) => { 
        console.log(event)
        this.setState({
            username : event.target.value
        })
    }
    handleTopic = (event) => { 
        console.log(event)
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => { 
        alert(`${this.state.username} ${this.state.topic}`)
    
    }

    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                <div>
                <h1>Form Component</h1>
                <label>User Name</label>
                <input type='text' value={this.state.username} onChange={this.handler}/>
                <br />
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
                <br></br>
                <button type="submit">Submit</button>
            </div>
           </form>
          
        )
    }
}

export default Form
