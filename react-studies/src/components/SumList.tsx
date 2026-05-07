import { useState } from "react";

export function SumList() {
    const [numbers] = useState([
        {id: 1, value: 11},
        {id: 2, value: 22},
        {id: 3, value: 33},
        {id: 4, value: 44},
    ]);

    const totalSum = numbers.reduce((acc, n) => acc+n.value,0); 
    return(
        <div>
            <h2>Numbers: </h2>
            <ul>
                {numbers.map((n) => (
                    <li key={n.id}>
                        {n.value}
                    </li>                    
                ))}
            </ul>
            <p>Sum: {totalSum}</p>
        </div>
    )
}