import { useState } from "react"

/**
 * En custom hook for å bytte mellom to boolean verdier.
 * Setter kan kalles uten parameter for å bytte mellom true og false.
 * Eller med en parameter for å sette verdien til true eller false.
 * @param initialValue - Initial verdi til boolean
 * @returns [boolean, (value?: boolean) => void] - Et par med boolean verdien og en funksjon for å bytte mellom true og false
 */
const useToggle = (initialValue = false): [boolean, (value?: boolean) => void] => {
    const [value, setValue] = useState(initialValue)
    const toggleValue = (newValue?: boolean) => setValue(newValue !== undefined ? newValue : !value)
    return [value, toggleValue]
}

export default useToggle
