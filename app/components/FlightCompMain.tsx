'use client'

import { RecoilRoot } from "recoil"
import { FlightComp } from "./FlightSeachComponents/FlightComp"
import { Suspense } from "react";

export function FlightCompMain(){
    return <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
        <FlightComp/>
        </Suspense>
    </RecoilRoot>
}