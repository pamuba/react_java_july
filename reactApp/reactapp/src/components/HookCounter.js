import React, {useState} from 'react'

function HookCounter() {
    const [count, increment] = useState(0)
    return (
        <div>
            <button onClick={() => increment(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
