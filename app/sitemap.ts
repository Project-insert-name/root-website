import { MetadataRoute } from "next"

/**
 * Genererer en sitemap for nettsiden.
 * Gjør det lettere for søkemotorer å indeksere nettsiden.
 * Filen blir tilgjengelig på /sitemap.xml
 * @returns En liste med metadata for hver side som skal indekseres.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const root = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.rootlinjeforening.no"
    return [
        {
            url: root,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${root}/arrangement`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${root}/galleri`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.5,
        },
        {
            url: `${root}/om-oss`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
    ]
}
