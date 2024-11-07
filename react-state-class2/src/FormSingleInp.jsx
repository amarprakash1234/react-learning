import { useState } from "react"

export default function FormSingleInp() {
    let [inpVal, setInpVal] = useState("Amar");

    function handleInput(ev) {
        // inpVal = ev.target.value;
        console.log(ev.target.value);
    }


    return (
        <>
            <form action="">
                <input type="text" value={inpVal} onChange={handleInput}/>
                <button>Submit</button>
            </form>
        
        </>
    )
}