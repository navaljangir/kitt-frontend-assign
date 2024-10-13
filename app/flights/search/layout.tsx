

import { ReactNode } from "react";

export  default function FlightResultLayout({children}  : {children : ReactNode}){
    return <div className="h-screen">
        <div className="">
            {children}
        </div>
    </div>
}