// Ikke bruke top-level import/export i denne filen, da typene ikke blir tilgjengelig i andre filer.

type Component<T = DefaultProps> = (props: T) => React.JSX.Element | null;

type AsyncComponent<T = DefaultProps> = (props: T) => Promise<React.JSX.Element | null>;

interface DefaultProps {
    className?: string,
    style?: React.CSSProperties,
    id?: string,
    title?: string,
}

interface ImageProps extends DefaultProps {
    src?: string,
    alt: string,
    width?: number,
    height?: number,
}

interface ChildProps extends DefaultProps {
    children?: React.ReactNode,
}
