'use client'
import { RecoilRoot } from "recoil";
import { FlightSearchNavBar } from "./FlightSearchResult/FlightSearchNavBar";
import { FlightsSearchResult } from "./FlightSearchResult/FlightSearchResult";
import { useEffect, useState } from "react";
import { FlightLoading } from "./FlightSearchResult/FlightLoading";
import { LineAnimation } from "@/components/ui/lineAnimation";
import { Spinner } from "@/components/ui/Spinner";
import { Check } from "./SVG";
import Image from "next/image";

export function FlightResult() {
    const [isLoading, setIsLoading] = useState(true)
    const [value , setValue] = useState(0);
    useEffect(()=>{
        const loadingTime = setTimeout(()=>{
            setIsLoading(false)
        } , 8000)
        const interval = setInterval(()=>{
            setValue((value)=> value+1)
        } , 2000)
        const intervalTime= setTimeout(()=>{
            clearInterval(interval)
        },6000)
        return ()=>{
            clearTimeout(loadingTime)
            clearInterval(interval)
            clearTimeout(intervalTime)
        }
    } ,[])
    return <RecoilRoot>
        <div className="border-b-2">
            <FlightSearchNavBar />
        </div>
        {isLoading ? (
            <div>
                <LineAnimation/>
                <div className="mx-56">
                    {Array(10).fill(0).map((_, index) => {
                        return <div key={index} className="flex flex-col border-2 rounded-md mt-10 w-full px-5 py-6">
                            <div>
                                <FlightLoading />
                            </div>
                            <div className="mt-10">
                                <FlightLoading />
                            </div>
                        </div>
                    })}
                </div>
                <div className="fixed top-1/2 left-1/2 -translate-x-1/2 shadow-lg -translate-y-1/2 rounded-lg border-2 bg-white px-10 py-7 ">
                    <div className="flex flex-col">
                        <div className="flex justify-center mb-32">
                        <div className="fixed h-32 w-32">
                            <Image src='https://cdn.dribbble.com/users/328772/screenshots/10293847/media/d45c05b5e858e2508fb1a3b84f33e932.gif' fill style={{objectFit:'contain' , background:'transparent'}} alt='Loading Animation' sizes="h-full w-full"/>
                        </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            {value<1 ? <Spinner/> : <Check/>}Searching 400+ flights
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                           {value<2 ? <Spinner/> : <Check/>} Attaching Company Rules
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                           {value<3 ? <Spinner/> : <Check/>} Serving Best Results
                        </div>
                    </div>
                    </div>        
            </div>) :
            <div>
                <FlightsSearchResult />
            </div>

        }
    </RecoilRoot>
}