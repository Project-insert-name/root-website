import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"
import colors from "tailwindcss/colors"
import typography from "@tailwindcss/typography"

/**
 * Definerer configurasjoner for TailwindCSS.
 * content inneholder paths til alle filer som skal kunne bruke TailwindCSS-klasser.
 * theme inneholder alle farger, fonter, størrelser osv. som skal kunne brukes.
 * Man kan legge til egne farger og lignende, ved å legge de til i extend.
 * @see https://tailwindcss.com/docs/configuration
 */
const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            "cascadia-code": ["Cascadia Code", "monospace"],
        },
        extend: {
            colors: {
                "root-light": "#44b2e3",
                "root-primary": "#1370A6",
                "root-primary-dark": "#0B4B6A",
                "root-secondary": colors.blue[500],
                "default-background": "#F3F3F3",
                "default-dark-background": "#0a0a12",
                "dark-title": "#3E3E3E",
                bedpress: "#FFBA09",
                social: "#09B5FF",
                workshop: "#FF0961",
                other: colors.gray[400],
            },
            maxWidth: {
                initial: "initial",
            },
            zIndex: {
                "101": "101",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui(), typography()],
}
export default config
