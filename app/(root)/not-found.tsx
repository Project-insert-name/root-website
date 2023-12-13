import Link from "next/link"
import { Button } from "@/components/buttons/button"

/**
 * Side som vises når brukeren går til en side som ikke finnes.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
const NotFound = () => {
    return (
        <div className="flex flex-col place-items-center gap-2">
            <div className="text-center font-bold">
                <h1 className="text-9xl">404</h1>
                <h2 className="text-4xl">Page Not Found</h2>
            </div>
            <p>Vi finner ikke siden</p>
            <Link href={"/"}>
                <Button>Gå til framsiden</Button>
            </Link>
        </div>
    )
}

export default NotFound
