import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.prim ? 'primary' : 'secondary'
    return (
        <div>
            <h2 className={`${className} font-xl`}>StyleSheet</h2>
        </div>
    )
}

export default Stylesheet
