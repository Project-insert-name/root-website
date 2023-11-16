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
} from "@nextui-org/react"
import { useState } from "react"
import Image from "next/image"
import paths from "@/components/header/paths"
import { Button } from "@/components/button"
import { usePathname } from "next/navigation"

const Header: Component = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const currentPath = usePathname()
    return (
        <Navbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll={true}
            className={
                "overflow-hidden bg-gradient-to-r from-rootBlue to-blue-500 drop-shadow-lg sm:h-20"
            }>
            <NavbarBrand>
                <div className={"logo-backdrop z-10"} />
                <Link href={"/"} title={"Root linjeforening sin logo"} className={"relative z-20"}>
                    {/*TODO test med ulike mobiler*/}
                    <Image
                        src={"/root-logo.svg"}
                        alt={"Logo for linjeforeningen root"}
                        /*Bredde og høyde må settes i className også, for å unngå advarsler*/
                        className={"h-[200px] w-[200px]"}
                        width={200}
                        height={200}
                    />
                </Link>
            </NavbarBrand>
            <NavbarContent className={"hidden gap-4 sm:flex"} justify={"end"}>
                {paths.map(item => (
                    <NavbarItem
                        key={item.path}
                        isActive={item.path === currentPath}
                        className={"text-white data-[active=true]:before:content-['/']"}>
                        <Link
                            className={"w-full text-inherit hover:text-white"}
                            href={item.path}
                            size={"lg"}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent className={"sm:hidden"} justify={"end"}>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className={"text-white"}
                />
            </NavbarContent>
            <NavbarMenu className={"z-[101] flex h-3/4 flex-col justify-between py-20"}>
                <div>
                    {paths.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`} className={"my-1 w-fit"}>
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

                <Button className={"mx-auto w-fit"} onClick={() => setIsMenuOpen(false)}>
                    Lukk vindu
                </Button>
            </NavbarMenu>
        </Navbar>
    )
}

export default Header
