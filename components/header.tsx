import Link from "next/link";
import Image from "next/image";

const Header: Component = () => (
    <header className={ `
        border w-full h-20 flex items-center justify-between overflow-hidden
        bg-gradient-to-r from-rootBlue to-blue-500` }>
        <div className={ "logo-backdrop" }>
            <Link href={ "/" } title={ "Root linjeforening sin logo" } className={ "translate-y-5" }>
                {/*TODO test med ulike mobiler*/}
                <Image src={ "./Root-logo.svg" } alt={ "Logo for linjeforeningen root" } width={ 200 } height={ 100 }
                       className={ "sm:block hidden" } />
                <Image src={ "./Root-logo.svg" } alt={ "Logo for linjeforeningen root" } width={ 125 } height={ 50 }
                       className={ "sm:hidden block" } />
            </Link>
        </div>
        <NavBar />
    </header>
)

export default Header;

const paths = [
    {
        name: "Hjem",
        path: "/"
    },
    {
        name: "Galleri",
        path: "/galleri"
    },
    {
        name: "Om oss",
        path: "/om-oss"
    }
];

const NavBar: Component = () => (
    <nav>
        <ul className={ "flex gap-3 font-bold text-white mx-5" }>
            { paths.map(({ name, path }) =>
                <li key={ path }>
                    <Link href={ path } className={ "hover:underline" }>{ name }</Link>
                </li>) }
        </ul>
    </nav>
)
