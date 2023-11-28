import { CircularProgressIndicator } from "@/components/suspense"

/**
 * En loading komponent som viser en spinner. Vises når data lastes inn fra async components.
 * @see https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
 */
const Loading: Component = () => (
    <div className={"flex items-center justify-center"}>
        <CircularProgressIndicator aria-label={"Loading data"} />
    </div>
)

export default Loading
