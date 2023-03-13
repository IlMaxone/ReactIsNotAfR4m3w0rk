import { useState } from "react";
import Image from "./Image";
import Alert from "./Alerts";

function Counter(){
    const [counter, setCounter] = useState(0);

    const handleClick = (operazione) => {
        if(operazione === "decrementa"){
            setCounter(valPrec => valPrec - 1);
        } else if(operazione === "incrementa"){
            setCounter(valPrec => valPrec + 1);
        }
    }

    return(
        <>
        <h1>{counter}</h1>
        <button onClick={() => handleClick("incrementa")}>+1</button>
        <button onClick={() => handleClick("decrementa")}>-1</button>
        {counter === 6 && (
            <Image src="https://www.troublefreepool.com/media/you-funny-gif.3465/full" alt="eh boy" />
        )}
        {counter === 7 && (
            <Image src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGRiMWI4YjUzNzE0NDZlOWE4ZjY3NjE3ZTJmMDNjNmUyNmZkNWRjZSZjdD1n/5wWf7GMbT1ZUGTDdTqM/giphy.gif" alt="it's free real estate" />
        )}
        {counter < 0 && (
            <Alert message="Valore sotto lo zero" type="danger" />
        )}
        </>
    )
}

export default Counter;