"use client"

import { ChevronRightIcon } from "@heroicons/react/24/outline"
import { defaultIconSize } from "@/components/icons/icon"
import useToggle from "@/hooks/useToggle"
import { useEffect, useRef } from "react"

/**
 * En meny som flyter over innholdet på venstre side av skjermen. Dersom skjermen er for liten, vil menyen kunne åpnes og lukkes.
 * Ellers vil menyen alltid være åpen.
 * @param children Innholdet som skal vises i menyen.
 * @param className Klassenavn som skal legges til menyen.
 * @param props Andre props som sendes til menyen.
 */
const FloatingMenu: Component<ChildProps> = ({ children, className, ...props }) => {
    const [isMenuOpen, toggleMenu] = useToggle()
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function onPress(e: MouseEvent): void {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                toggleMenu(false)
            }
        }

        document.addEventListener("click", onPress)
        return () => document.removeEventListener("click", onPress)
    }, [])

    return (
        <div ref={menuRef} className={`fixed left-0 z-50 ${className}`} {...props}>
            <div className={"2xl:hidden"}>
                <button
                    className={`h-fit w-fit divide-y rounded-r-2xl bg-white p-2 opacity-70 dark:bg-default-dark-background`}
                    title={`${isMenuOpen ? "Lukk" : "Åpne"} meny`}
                    onClick={() => toggleMenu()}>
                    <ChevronRightIcon
                        width={defaultIconSize}
                        className={`transition-all duration-200 ${isMenuOpen && "rotate-180"}`}
                    />
                </button>
                <div
                    className={`sticky h-full w-fit transition-all duration-200 ${
                        isMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}>
                    {children}
                </div>
            </div>
            <div className={"hidden 2xl:block"}>{children}</div>
        </div>
    )
}

export default FloatingMenu
