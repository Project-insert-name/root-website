"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import useToggle from "@/hooks/useToggle";
import paths from "@/components/header/paths";
import Link from "next/link";

// TODO lås scroll når menyen er åpen

const iconSize = 40;

/**
 * Hamburger menu som vises på mobil og mindre skjermer
 * @param className - css klassenavn for button
 * @param sliderClassName - css klassenavn for slider
 */
const HamburgerMenu: Component<{ sliderClassName: string } & DefaultProps> = ({ className, sliderClassName }) => {
    const [isOpen, setIsOpen] = useToggle(false);
    return (
        <>
            { isOpen &&
                <div className={ "bg-black/20 absolute w-screen h-full z-20 left-0 top-0" }
                     onClick={ () => setIsOpen() } />
            }
            <button onClick={ () => setIsOpen() } className={ `z-40 ${ className }` }>
                <Bars3Icon width={ iconSize } color={ "white" } />
            </button>
            <Slider onClick={ () => setIsOpen(false) }
                    className={ `${ isOpen ? "right-0" : "-right-full" } transition-all duration-200 ${ sliderClassName }` } />
        </>
    );
}

export default HamburgerMenu;

const Slider: Component<{ onClick: VoidFunction } & DefaultProps> = ({ className, onClick }) => (
    <div className={
        `absolute top-0 w-1/2 h-fit bg-white rounded-l-xl z-50 p-2 ${ className }`
    }>
        <button onClick={ onClick } className={ "w-full flex justify-end p-2" } title={ "Lukk" }>
            <XMarkIcon width={ iconSize } />
        </button>
        <ul className={ "flex flex-col gap-2" }>
            { paths.map(({ name, path, icon }) =>
                <li key={ path } className={ "px-5 py-2" }>
                    <Link href={ path } className={ "text-2xl flex items-center gap-2" } onClick={ onClick }>
                        { icon } { name }
                    </Link>
                </li>
            ) }
        </ul>
    </div>
)
