import "./globals.css"
import type { Metadata, Viewport } from "next"
import type { FC, ReactNode } from "react"
import Footer from "@/components/footer"
import Header from "@/components/header/header"
import { Providers } from "@/app/(root)/providers"
import Head from "next/head"

/**
 * Inneholder tittel som vises i fanen til nettleseren og beskrivelse som vises i søkeresultater.
 *
 * @see https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 */
export const metadata: Metadata = {
    title: "Root Linjeforening",
    description: `
        Root er linjeforeningen for studenter som studerer eller har fullført studiet dataingeniør
        eller informasjonsteknologi ved Høgskulen På Vestlandet, avdeling Bergen.
        Linjeforeningens formål er å fremme godt studiemiljø blant studentene. Linjeforeningen skal også opprette og
        opprettholde kontakt mellom studentene tilsluttet linjeforeningen og bedrifter i næringslivet.
    `,
    keywords: [
        "Root",
        "Linjeforening",
        "HVL",
        "Høgskulen på Vestlandet",
        "Informasjonsteknologi",
        "Dataingeniør",
    ],
}

/**
 * Inneholder informasjon om viewport, som skjermbredde og zoom.
 * Samt farger.
 * @see https://nextjs.org/docs/app/api-reference/functions/generate-viewport#the-viewport-object
 */
export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1.0,
    colorScheme: "only light",
    themeColor: "#F3F3F3",
}

/**
 * RootLayout er en layout-komponent som brukes av alle sidene i nettsiden.
 * HTML som blir returnert fra de andre sidene blir plassert i <main> taggen.
 * @param children - HTML som skal plasseres i <main> taggen.
 */
const RootLayout: FC<{ children: ReactNode }> = ({ children }) => (
    <html lang="nb">
        <Head>
            <meta
                name="google-site-verification"
                content="ff3j07lovsouc9oLEt871sodlGdi8VtTUeiitYbQs2Q"
            />
        </Head>
        <body className="relative min-h-screen bg-defaultBg">
            <Providers>
                <Header />
                <main className="pb-28 sm:pt-2">{children}</main>
                <Footer />
            </Providers>
        </body>
    </html>
)

export default RootLayout
