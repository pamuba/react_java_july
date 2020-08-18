import React, { PureComponent } from 'react'

export class PureCom extends PureComponent {
   
    render() {
        console.log("Pure Component Render")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}

export default PureCom
