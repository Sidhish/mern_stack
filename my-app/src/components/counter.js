import React, {useState} from "react"

function Counter(){
    const [name,setName] = useState("LPU");
    function changeName(){
        setName("Students");
    }
    return (
        <main>
            <h1>Hello {name}</h1>
            <button onClick={changeName}>Change</button>
        </main>
    )
}

export default Counter;