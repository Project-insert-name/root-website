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
    Button as HeroUIButton
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
                        return <NavbarItem key={`${item}-${index}`} isActive={item.path === currentPath}>
                                <Link
                                    className={`${
                                        item.path === currentPath && "before:content-['/']"
                                    } w-full rounded-xl bg-gray-700/20 p-2 !text-white hover:text-white focus:!outline-white`}
                                    href={item.path}
                                    size={"lg"}>
                                    {item.name}
                                </Link>
                            </NavbarItem>
                    } else {
                        // eslint-disable-next-line react/jsx-key
                        return <Dropdown key={`${item}-${index}`}>
                                    <NavbarItem>
                                        <DropdownTrigger className="cursor-pointer">
                                            <Link
                                                className={"w-full rounded-xl bg-gray-700/20 p-2 !text-white hover:text-white focus:!outline-white"}
                                                size={"lg"}>
                                                {item.name}
                                            </Link>
                                        </DropdownTrigger>
                                    </NavbarItem>
                                    <DropdownMenu>
                                        {item.subpaths.map(subitem =>
                                            <DropdownItem
                                                key={subitem.name}
                                                description={subitem.description}
                                                as={Link}
                                                href={subitem.path}
                                                className="w-full rounded-xl  bg-gray-700/20 p-2 !text-white hover:text-white focus:!outline-white"
                                            >
                                                {subitem.name}
                                            </DropdownItem>
                                        )}
                                    </DropdownMenu>
                                </Dropdown>
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
                <div>
                    {paths.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className={"my-1 w-fit list-none"}>
                            <Link
                                color={item.path === currentPath ? "primary" : "foreground"}
                                className={"flex w-full items-center gap-2 text-2xl"}
                                href={item.path}
                                size={"lg"}>
                                {item.icon}

                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </div>

                <Button className={"mx-auto w-fit"} onPress={() => setIsMenuOpen(false)}>
                    Lukk
                </Button>
            </NavbarMenu>
        </Navbar>
    )
}

export default Header
