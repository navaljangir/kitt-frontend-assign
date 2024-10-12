'use client'
import { Suspense } from "react"
import { FlightSearchNavBar } from "./FlightSearchResult/FlightSearchNavBar"
 
export function FlightNavBarMain(){
    return <Suspense>
        <FlightSearchNavBar/>
    </Suspense>
}