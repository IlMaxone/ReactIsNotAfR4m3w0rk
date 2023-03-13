import { useEffect, useState } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [color, setColor] = useState("#000000");
    const [size, setSize] = useState(16);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(valorePrecedente => valorePrecedente + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <input type="color" onChange={(e) => setColor(e.target.value)} />
            <input type="range" min="10" max="50" value={size} onChange={(e) => setSize(e.target.value)} />
            <br /><br />
            Sono passati <span style={{color: color, fontSize: `${size}px`}}>{seconds}</span> secondi dal caricamento della pagina.
        </div>
    )
}

export default Timer;