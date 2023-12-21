import { ReactNode } from "react"

export const metadata = {
    title: "Sanity",
    description: "Sanity studio for Root Linjeforening",
}

/**
 * Layout for Sanity Studio.
 * @param children - HTML som skal plasseres i <body> taggen.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
