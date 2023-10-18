export const ExternalLink: Component<{ href?: string } & ChildProps> = (
    {
        href,
        children,
        title,
        className,
        ...props
    }) => (
    <a href={ href } rel={ "noopener noreferrer" } className={ className } title={ title }
       target={ "_blank" } { ...props }>
        { children }
    </a>
)
