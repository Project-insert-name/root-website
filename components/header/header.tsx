import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "@/components/header/hamburger";
import paths from "@/components/header/paths";

const Header: Component = () => (
    <header
        className={ `border w-full h-20 flex items-center justify-between bg-gradient-to-r from-rootBlue to-blue-500` }>
        <div className={ "relative w-max h-full flex items-center" }>
            <div className={ "logo-backdrop z-10" } />
            <Link href={ "/" } title={ "Root linjeforening sin logo" } className={ "relative z-20 sm:mx-5 mx-2 w-fit" }>
                {/*TODO test med ulike mobiler*/ }
                <Image src={ "/Root-logo.svg" } alt={ "Logo for linjeforeningen root" } width={ 200 } height={ 200 } />
            </Link>
        </div>
        <div>
            <NavBar className={ "sm:flex hidden w-fit" } />
            <HamburgerMenu className={ "sm:hidden inline-flex z-30 mx-5" } />
        </div>
    </header>
)

export default Header;

const NavBar: Component = ({ className }) => (
    <nav>
        <ul className={ `flex gap-3 font-bold mx-5 ${ className }` }>
            { paths.map(({ name, path }) =>
                <li key={ path }>
                    <Link href={ path } className={ "!text-white" }>{ name }</Link>
                </li>) }
        </ul>
    </nav>
)
