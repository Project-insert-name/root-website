export const Button: Component<ChildProps> = (
    {
        children,
        className,
        title,
        ...props
    }) => (
    <button className={ `bg-rootBlue text-white p-3 rounded-2xl min-w-[100px] ${ className }` } title={ title } { ...props }>
        { children }
    </button>
)