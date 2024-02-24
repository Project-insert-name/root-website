"use client"

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from "next-sanity/studio"
import config from "@/sanity.config"

/**
 * Sanity Studio komponenten
 */
const Studio: Component = () => {
    // @ts-ignore ikke støttet av @Sanity-typed
    return <NextStudio config={config} />
}

export default Studio
