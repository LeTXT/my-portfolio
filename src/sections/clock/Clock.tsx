import { useState, useEffect } from "react";
import './clock.scss'

function Clock() {
    const [clock, setClock] = useState<string>(new Date().toLocaleTimeString('pt-BR'));
    const [clockBr, setClockBr] = useState<string>(new Date().toLocaleTimeString('pt-BR', { timeZone: "America/Sao_Paulo" }))

    useEffect(() => {

        const interval = setInterval(() => {
            setClock(new Date().toLocaleTimeString())
            setClockBr(new Date().toLocaleTimeString('pt-BR', { timeZone: "America/Sao_Paulo" }))
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="clock">
            <h2>{'BRT ' + clockBr}</h2>
            <h2>{clock}</h2>
        </div>
    )
}

export default Clock;