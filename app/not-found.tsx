import Link from 'next/link'
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col place-items-center self-center">
            <div className="text-center font-bold">
            <p className="text-9xl">404</p>
            <p className="text-4xl">Page Not Found</p>
            </div>
            <p>Vi finner ikke siden</p>
            <div className={ "mx-auto w-fit border py-1 px-4 bg-rootBlue rounded-2xl text-white my-2 font-bold" }>
                <Link href={"./"}>Gå til framsiden</Link>
            </div>
        </div>
    )
}