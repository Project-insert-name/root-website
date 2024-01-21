// Ikke bruke top-level import/export i denne filen, da typene ikke blir tilgjengelig i andre filer.

/**
 * Props som kan være tilgjengelig på alle sider
 */
interface PageProps<T> {
    /**
     * Parametere som blir sendt med til siden. For eksempel fra parametre i URLen.
     * @see https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#convention
     * @example /arrangement/[slug]
     */
    params: T
    searchParams?: { [key: string]: string | string[] | undefined }
}

/**
 * Definerer en standard synkron side. Brukes på default export i page.tsx
 */
type Page<T = never> = (params: PageProps<T>) => React.JSX.Element | null

/**
 * Definerer en standard asynkron side. Brukes på default export i page.tsx
 */
type AsyncPage<T = {}> = (params: PageProps<T>) => Promise<React.JSX.Element | null>

/**
 * Definerer en standard komponent. Kan brukes på alle komponenter som ikke er sider.
 */
type Component<T = DefaultProps> = (props: T) => React.JSX.Element | null

/**
 * Definerer en standard asynkron komponent. Kan brukes på alle komponenter som ikke er sider.
 */
type AsyncComponent<T = DefaultProps> = (props: T) => Promise<React.JSX.Element | null>

/**
 * Dynamic typen kan brukes for å velge mengden caching som skal brukes på en komponent.
 * Kan kun brukes på en server-side rendret side.
 * @example export const dynamic = "force-dynamic"
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamic
 */
type Dynamic = "auto" | "force-dynamic" | "error" | "force-static"

/**
 * Generelle props som kan brukes på alle komponenter
 */
interface DefaultProps {
    className?: string
    style?: React.CSSProperties
    id?: string
    title?: string
    "aria-label"?: string
}

interface ImageProps extends DefaultProps {
    src?: string
    alt: string
    width?: number
    height?: number
}

interface ChildProps extends DefaultProps {
    children?: React.ReactNode
}

interface ButtonProps extends ChildProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}
