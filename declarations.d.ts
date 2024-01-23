/**
 * Definerer typer for modulen react-use-keypress
 */
declare module "react-use-keypress" {
    /**
     * Hook som lytter etter tastetrykk
     * @param targetKey Tasten som skal lyttes etter
     * @param handler Funksjon som skal kjøres når tasten trykkes
     * @see https://www.npmjs.com/package/react-use-keypress
     */
    function useKeyPress(targetKey: string, handler: VoidFunction): boolean
    export = useKeyPress
}
