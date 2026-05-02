import { useState} from "react";
import type { ChangeEvent } from "react";

export function TextMirror(){
    const [text, setText] = useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
    }

    return(
        <div>
            <label>
                Type something:
            </label>

            <input 
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Start typing..."
            />

            <p>
                {text ? <>You tiped: {text}</> : <>Nothing yet</>}
            </p>
        </div>
    )
}