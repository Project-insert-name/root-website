export const ExternalLink: Component<{ href?: string } & ChildProps> = (
    {
        href,
        children,
        className,
        ...props
    }) => (
    <a href={ href } rel={ "noopener noreferrer" } className={ className }
       target={ "_blank" } { ...props }>
        { children }
    </a>
)

export const MailLink: Component<{ mail?: string } & ChildProps> = (
    {
        mail,
        children
    }) => (
    <ExternalLink href={ `mailto:${ mail }` }>{ children ? children : mail }</ExternalLink>
)
