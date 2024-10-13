'use client'

import { RecoilRoot } from "recoil"
import { FlightComp } from "./FlightSeachComponents/FlightComp"

export function FlightCompMain(){
    return <RecoilRoot>
        <FlightComp/>
    </RecoilRoot>
}