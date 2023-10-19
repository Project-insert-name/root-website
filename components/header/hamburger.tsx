"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import useToggle from "@/hooks/useToggle";
import paths from "@/components/header/paths";
import Link from "next/link";

/**
 * Hamburger menu som vises på mobil
 * @param className - css klassenavn for button
 */
const HamburgerMenu: Component = ({ className }) => {
    const [isOpen, setIsOpen] = useToggle(false);
    return (
        <>
            { isOpen &&
                <div className={ "bg-black/20 fixed w-full h-full z-20 top-0 overflow-clip" }
                     onClick={ () => setIsOpen() } />
            }
            <div className={ "relative" }>
                <button onClick={ () => setIsOpen() } className={ `z-40 ${ className }` }>
                    <Bars3Icon width={ 40 } color={ "white" } />
                </button>
                { isOpen &&
                    <ul className={ "absolute right-2 w-max bg-white border border-gray-600 rounded-xl z-50 p-2" }>
                        { paths.map(({ name, path }) =>
                            <li key={ path } className={ "p-1" }>
                                <Link href={ path } className={ "text-2xl" }>{ name }</Link>
                            </li>
                        ) }
                    </ul>
                }
            </div>
        </>
    );
}

export default HamburgerMenu;
