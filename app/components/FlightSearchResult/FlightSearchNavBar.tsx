/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { airports } from "@/app/lib/airportData";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation"
import { CloseIcon, SearchIcon } from "../SVG";
import { flightSearchAtom } from "@/app/lib/atoms/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { SearchFlights } from "../FlightSeachComponents/SearchFlightInputBoxes";
import { SearchAirports } from "../FlightSeachComponents/SearchAiports";
import { FlightComp } from "../FlightSeachComponents/FlightComp";

export function FlightSearchNavBar() {
    const path = useSearchParams();
    const srcCode = path.get('src')
    const destCode = path.get('dest')
    const getReturnDate = path.get('rDate')
    const [flightSearchVal , setFlightSearchVal] = useRecoilState(flightSearchAtom);
    const [navBarOpen , setNavBarOpen] = useState(false); 
    
    const source = airports.find((airport) => {
        return airport.code === srcCode
    })
    const destination = airports.find((airport) => {
        return airport.code === destCode
    })
    // if (getReturnDate) {
    //     returnDate = new Date(getReturnDate);
    // }
    useEffect(()=>{
        const departureDate =  new Date(path.get('dDate') || new Date())
        departureDate.setHours(0 ,0 , 0, 0)
        setFlightSearchVal((searchFlightVal)=>({
            ...searchFlightVal , 
            srcCode : path.get('src') || '',
            destCode : path.get('dest') || '',
            departureDate : departureDate,
            source : source?.name || '',
            destination : destination?.name || ''
        }))
        const returnDate = new Date(getReturnDate || new Date())
        if(getReturnDate){
            setFlightSearchVal((searchFlightVal)=>({
                ...searchFlightVal ,
                returnDate : returnDate
            }))
        }
    } , [source?.name , destination?.name , path , setFlightSearchVal  , getReturnDate])
   
    return (
        <div>
<div className="flex justify-between mx-56 py-5" onClick={()=> setNavBarOpen(!navBarOpen)}>
            <div className="border-2 px-6 py-3 rounded-full cursor-pointer flex gap-3">
                {/* Search Boxes */}
                <div className="flex  w-52 whitespace-nowrap gap-2">
                    <div className="font-bold">
                        {flightSearchVal.srcCode}
                    </div>
                    <div className="text-ellipsis overflow-hidden">
                        {flightSearchVal.source ? flightSearchVal.source : 'No Such Airport'}
                    </div>
                </div>
                <div className="h-full border-[1px]  w-[1px]"></div>
                <div className="flex  w-52 whitespace-nowrap gap-2">
                    <div className="font-bold">
                        {flightSearchVal.destCode}
                    </div>
                    <div className="text-ellipsis overflow-hidden">
                        {flightSearchVal.destination}
                    </div>
                </div>
                <div className="h-full border-[1px]  w-[1px]"></div>
                <div className="flex">
                    <div>
                        {format(flightSearchVal.departureDate, 'MMMM dd')}
                    </div>
                    {/* Return Date If There */}
                    {getReturnDate && <div>
                        - {format(flightSearchVal.returnDate || new Date(), 'MMMM dd')}
                    </div>}
                </div>
                <div className="h-full border-[1px]  w-[1px]"></div>
                <div className="bg-gray-400 p-[6px] rounded-full flex flex-col justify-center">
                    <SearchIcon/>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <button className="flex flex-col justify-center border-2 rounded-full items-center outline-none w-12 h-12">
                    <div className="">
                        <CloseIcon />
                    </div>
                </button>
            </div>
        </div>
        {navBarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 transition-opacity duration-500"
                    onClick={()=> setNavBarOpen(!navBarOpen)}
                ></div>
            )}
            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-in-out ${
                    navBarOpen ? 'transform translate-y-0' : 'transform -translate-y-full'
                }`}
            >
                <div className="bg-white flex justify-center pb-10">
                <FlightComp toggleNavBar={()=> setNavBarOpen(!navBarOpen)} />
                </div>
            </div>
        </div>
    )
}