import Link from "next/link"
import Image from "next/image"
import HamburgerMenu from "@/components/header/hamburger"
import paths from "@/components/header/paths"

const Header: Component = () => (
    <header
        className={`flex h-20 w-full items-center justify-between overflow-hidden bg-gradient-to-r from-rootBlue to-blue-500 drop-shadow-lg`}>
        <div className={"relative flex h-full w-max items-center"}>
            <div className={"logo-backdrop z-10"} />
            <Link
                href={"/"}
                title={"Root linjeforening sin logo"}
                className={"relative z-20 mx-2 w-fit sm:mx-5"}>
                {/*TODO test med ulike mobiler*/}
                <Image
                    src={"/Root-logo.svg"}
                    alt={"Logo for linjeforeningen root"}
                    width={200}
                    height={200}
                />
            </Link>
        </div>
        <div>
            <NavBar className={"hidden w-fit sm:flex"} />
            <HamburgerMenu className={"z-30 mx-5 inline-flex sm:hidden"} />
        </div>
    </header>
)

export default Header

const NavBar: Component = ({ className }) => (
    <nav>
        <ul className={`mx-5 flex gap-3 font-bold ${className}`}>
            {paths.map(({ name, path }) => (
                <li key={path}>
                    <Link href={path} className={"!text-white"}>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    </nav>
)
