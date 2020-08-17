import React from 'react'

function MemoCom({name}) {
    console.log("Rendering Memo Compponent")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoCom) 
