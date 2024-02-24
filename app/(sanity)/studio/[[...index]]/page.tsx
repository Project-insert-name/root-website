import Studio from "@/app/(sanity)/studio/[[...index]]/studio"

/**
 * Sikrer at siden blir statisk generert under bygging.
 * @see https://github.com/sanity-io/next-sanity/tree/main?tab=readme-ov-file#studio-route-with-app-router
 */
export const dynamic: Dynamic = "force-static"

/**
 * Viser Sanity Studio.
 * @see https://github.com/sanity-io/next-sanity/tree/main?tab=readme-ov-file#studio-route-with-app-router
 */
const StudioPage: Page = () => <Studio />

export default StudioPage
