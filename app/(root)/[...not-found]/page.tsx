import { notFound } from "next/navigation"

/**
 * En catch-all side for alle sider som ikke finnes, og redirecter til den faktiske 404-siden.
 * Dette er en workaround for å få not-found.tsx til å fungere med route grouping.
 * Siden not-found siden må vanligvis ligge direkte under app, noe som gjør at vi ikke får tilgang til styling fra resten av nettsiden.
 * @see https://github.com/vercel/next.js/discussions/50034
 */
export default notFound
