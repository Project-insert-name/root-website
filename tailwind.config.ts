import type { Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                rootBlue: "#1480BF",
                rootBlueDark: "#0B4B6A",
                defaultBg: "#F3F3F3",
                darkTitle: "#3E3E3E",
                bedpress: "#FFBA09",
                social: "#09B5FF",
                workshop: "#FF0961",
            },
            maxWidth: {
                initial: "initial",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui()],
}
export default config
