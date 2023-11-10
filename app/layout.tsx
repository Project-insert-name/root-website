import "./globals.css"
import type { Metadata } from "next"
import type { FC, ReactNode } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { Providers } from "@/app/providers"

/**
 * Inneholder tittel som vises i fanen til nettleseren og beskrivelse som vises i søkeresultater.
 */
export const metadata: Metadata = {
    title: "Root Linjeforening",
    description: "Generated by create next app", // TODO
    colorScheme: "only light",
    viewport: "width=device-width, initial-scale=1.0",
    keywords: [
        "Root",
        "Linjeforening",
        "HVL",
        "Høgskulen på Vestlandet",
        "Informasjonsteknologi",
        "Dataingeniør",
    ],
    themeColor: "#F3F3F3",
}

/**
 * RootLayout er en layout-komponent som brukes av alle sidene i nettsiden.
 * HTML som blir returnert fra de andre sidene blir plassert i <main> taggen.
 * @param children - HTML som skal plasseres i <main> taggen.
 */
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
    <html lang="nb">
        <body className="relative min-h-screen bg-defaultBg">
            <Providers>
                <Header />
                <br />
                <main className="pb-28">{children}</main>
                <Footer />
            </Providers>
        </body>
    </html>
)

export default RootLayout
