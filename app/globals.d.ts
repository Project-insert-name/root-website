// Ikke bruke top-level import/export i denne filen, da typene ikke blir tilgjengelig i andre filer.

type Component<T = DefaultProps> = (props: T) => React.JSX.Element | null;

type ServerComponent<T = DefaultProps> = (props: T) => Promise<React.JSX.Element | null>;

interface DefaultProps {
    className?: string,
    style?: React.CSSProperties,
    id?: string,
    title?: string,
}

interface ChildProps extends DefaultProps {
    children?: React.ReactNode,
}
