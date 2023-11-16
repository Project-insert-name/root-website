// Ikke bruke top-level import/export i denne filen, da typene ikke blir tilgjengelig i andre filer.

interface PageProps<Params> {
    params: Params
    searchParams?: { [key: string]: string | string[] | undefined }
}

type Page<Params = never> = (props: PageProps<Params>) => React.JSX.Element | null

type AsyncPage<Params = {}> = ({
    params,
    searchParams,
}: PageProps<Params>) => Promise<React.JSX.Element | null>

type Component<T = DefaultProps> = (params: T) => React.JSX.Element | null

type AsyncComponent<T = DefaultProps> = (params: T) => Promise<React.JSX.Element | null>

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
    objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down"
}

interface ChildProps extends DefaultProps {
    children?: React.ReactNode
}

interface ButtonProps extends ChildProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
    type?: "button" | "submit" | "reset"
    disabled?: boolean
}
