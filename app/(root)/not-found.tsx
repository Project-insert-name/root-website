import { LinkButton } from "@/components/buttons/button"

/**
 * Side som vises når brukeren går til en side som ikke finnes.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
const NotFound = () => (
    <div className="flex flex-col place-items-center gap-2">
        <div className="text-center">
            <h1 className="text-9xl">404</h1>
            <h2 className="text-4xl">Siden ble ikke funnet</h2>
        </div>
        <p>Vi finner ikke siden</p>
        <LinkButton href={"/"} aria-label={"Gå tilbake til framsiden"}>
            Gå til framsiden
        </LinkButton>
    </div>
)

export default NotFound
