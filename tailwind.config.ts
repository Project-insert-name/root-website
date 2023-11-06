import type { Config } from "tailwindcss"

const config: Config = {
    content: ["./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                rootBlue: "#1480BF",
                defaultBg: "#F3F3F3",
                darkTitle: "#3E3E3E",
                bedpress: "#FFBA09",
                social: "#09B5FF",
                workshop: "#FF0961",
            },
        },
    },
    plugins: [],
}
export default config
