"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button as HeroUIButton,
} from "@heroui/react"
import { useEffect, useState } from "react"
import Image from "next/image"
import paths from "@/components/header/paths"
import { Button } from "@/components/buttons/button"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"

/**
 * Headeren på nettsiden. Inneholder logo og navigasjonsmeny.
 * Navignasjonsmenyen blir til en hamburgermeny på små skjermer.
 * Bygget med NextUI sin Navbar.
 * @see https://nextui.org/docs/components/navbar
 */
const Header: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentPath = usePathname()
    const { theme: initialTheme } = useTheme()
    /**
     * Siden theme ikke er tilgjengelig på server-side, må vi bruke useEffect for å sette temaet.
     * For å unngå en feilmelding om at src er ulik på client og server.
     * @see https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
     */
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        if (!initialTheme) return
        setTheme(initialTheme)
    }, [initialTheme])
    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll={true}
            // CSS for header komponenten
            classNames={{ wrapper: ["pl-0 max-w-initial"] }}
            className={
                "header-gradient dark:header-gradient-dark z-101 mb-5 overflow-hidden border-b light:drop-shadow-lg dark:border-gray-700 sm:h-20"
            }>
            <NavbarBrand>
                <div className={"logo-backdrop z-10"} />
                <Link
                    href={"/"}
                    title={"Root linjeforening logo"}
                    className={
                        "relative z-20 h-20 w-40 focus:outline focus:outline-root-primary sm:w-48"
                    }>
                    <Image
                        priority={true}
                        className={"translate-y-2 scale-[1.3] object-contain sm:scale-[1.55]"}
                        src={theme === "dark" ? "/root-logo-dark.png" : "/root-logo-light.png"}
                        alt={"Logo for linjeforeningen root"}
                        sizes={"33vw"}
                        fill
                    />
                </Link>
            </NavbarBrand>
            {/*Vanlig meny - Vises ikke på små skjermer*/}
            <NavbarContent className={"hidden gap-4 md:flex"} justify={"end"}>
                {paths.map((item, index) => {
                    if (item.subpaths === undefined) {
                        return (
                            <NavbarItem
                                key={`${item}-${index}`}
                                isActive={item.path === currentPath}>
                                <Link
                                    className={`${
                                        item.path === currentPath && "before:content-['/']"
                                    } w-full rounded-xl bg-gray-700/20 p-2 !text-white hover:text-white focus:!outline-white`}
                                    href={item.path}
                                    size={"lg"}>
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        )
                    } else {
                        // eslint-disable-next-line react/jsx-key
                        return (
                            <Dropdown key={`${item}-${index}`}>
                                <NavbarItem>
                                    <DropdownTrigger className="cursor-pointer">
                                        <Link
                                            className={
                                                "w-full rounded-xl bg-gray-700/20 p-2 !text-white hover:text-white focus:!outline-white"
                                            }
                                            size={"lg"}>
                                            {item.name}
                                        </Link>
                                    </DropdownTrigger>
                                </NavbarItem>
                                <DropdownMenu>
                                    {item.subpaths.map(subitem => (
                                        <DropdownItem
                                            key={subitem.name}
                                            description={subitem.description}
                                            as={Link}
                                            href={subitem.path}
                                            className="w-full rounded-xl  bg-gray-700/20 p-2 !text-white hover:text-white focus:!outline-white">
                                            {subitem.name}
                                        </DropdownItem>
                                    ))}
                                </DropdownMenu>
                            </Dropdown>
                        )
                    }
                })}
            </NavbarContent>
            {/*Hamburgermeny - Vises bare på små skjermer*/}
            <NavbarContent className={"md:hidden"} justify={"end"} as={"div"}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className={"text-white"}
                />
            </NavbarContent>
            {/*Innholdet i hamburgermeny - Vises bare på små skjermer*/}
            <NavbarMenu className={"z-101 flex h-3/4 flex-col justify-between py-20"}>
                <div className="flex flex-col gap-2 px-4">
                    {paths.map((item, index) => {
                        if (!item.subpaths) {
                            return (
                                <NavbarMenuItem key={`${item.name}-${index}`} className="my-1">
                                    <Link
                                        href={item.path}
                                        className="flex w-full items-center gap-2 text-2xl text-white hover:text-root-primary"
                                        onPress={() => setIsMenuOpen(false)}>
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                </NavbarMenuItem>
                            )
                        }
                        return (
                            <div key={`${item.name}-${index}`} className="my-1">
                                <details className="group [&_summary::-webkit-details-marker]:hidden">
                                    <summary className="flex cursor-pointer items-center justify-between text-2xl font-semibold text-white hover:text-root-primary">
                                        <span className="flex items-center gap-2">
                                            {item.icon}
                                            {item.name}
                                        </span>
                                        <svg
                                            className="h-5 w-5 transform transition-transform group-open:rotate-180"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </summary>

                                    <div className="ml-6 mt-2 flex flex-col gap-1">
                                        {item.subpaths.map(subitem => (
                                            <Link
                                                key={subitem.name}
                                                href={subitem.path}
                                                className="text-lg text-gray-300 hover:text-white"
                                                onPress={() => setIsMenuOpen(false)}>
                                                {subitem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </details>
                            </div>
                        )
                    })}
                </div>

                <Button className={"mx-auto w-fit"} onPress={() => setIsMenuOpen(false)}>
                    Lukk
                </Button>
            </NavbarMenu>
        </Navbar>
    )
}

export default Header
