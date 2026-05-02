import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count+1)}>
                Add 1
            </button>
            <button onClick={() => setCount(count-1)}>
                Subtract 1
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    )
}