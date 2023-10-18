import Link from 'next/link'
import React from "react";
import { Button } from "@/components/button";

export default function NotFound() {
    return (
        <div className="flex flex-col gap-2 place-items-center">
            <div className="text-center font-bold">
                <h1 className="text-9xl">404</h1>
                <h2 className="text-4xl">Page Not Found</h2>
            </div>
            <p>Vi finner ikke siden</p>
            <Link href={ "./" }>
                <Button>Gå til framsiden</Button>
            </Link>
        </div>
    )
}