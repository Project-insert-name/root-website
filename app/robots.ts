import { MetadataRoute } from "next"

/**
 * Definerer innholdet i robots.txt-filen.
 * Robots.txt er en tekstfil som definere hvilke sider som skal indekseres av søkemotorer.
 * Her tilatter vi at alle sider utenom "/studio" skal indekseres.
 * Dersom vi ikke ønsker at en side skal indekseres, kan vi legge til en "disallow"-regel.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 * @see https://developers.google.com/search/docs/advanced/robots/robots_txt
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "studio",
        },
    }
}
