// Sier at denne filen skal bruke client siden av next.js
"use client"

import { FC, useEffect, useState } from "react"

/**
 * Definerer en Page component som inneholder en counter og en setState for å oppdatere den
 */
const Counter: FC = () => {
    /**
     * count henter en state, mens setCount brukes for å oppdatere den
     * Slik at innholdet i komponenten oppdateres
     * Parameter i useState er initial verdien
     */
    const [count, setCount] = useState(0)

    /**
     * useEffekt med en tom array som parameter kjøres kun en gang når komponenten lastes inn
     */
    useEffect(() => {
        console.log("Komponenten er lastet inn")
    }, [])

    /**
     * useEffekt med count som parameter kjøres hver gang count oppdateres
     */
    useEffect(() => {
        console.log("Count er oppdatert")
    }, [count])

    // Returnerer html koden som skal vises
    return (
        <div className={"mx-auto w-max"}>
            <h1>Counter</h1>
            {/*Man kan skriv js kode i html ved å bruke {}*/}
            <p>Count: {count}</p>
            {/*Bruker en tertier if for å returnere html*/}
            {count % 2 === 0 ? <p>Even</p> : <p>Odd</p>}
            {/*Ved å kalle setCount, oppdateres innholdet i count*/}
            <button
                className={"rounded bg-blue-500 p-2 text-white"}
                onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

// Vi må eksportere komponenten for at den skal kunne brukes som en page
export default Counter
