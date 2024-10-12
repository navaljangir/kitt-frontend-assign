

import { ReactNode, Suspense } from "react";

export  default function FlightResultLayout({children}  : {children : ReactNode}){
    return <div className="h-screen">
        <div className="">
        <Suspense fallback={<div>Loading...</div>}>
        {children}

        </Suspense>
        </div>
    </div>
}