import React, {useCallback, useState} from "react";
import Rerender from "./Rerender";

export default function UseCallback() {
    const [count, setCount] = useState(0)
    const handleClick = useCallback(() => setCount(count + 1), [])
    const handleHello = () => alert('hello')
    return (
        <div>
            Learn useCallback!
            <span>value count is {count}</span>
            <button onClick={handleClick}>increment</button>
            <Rerender/>
        </div>
    )
}