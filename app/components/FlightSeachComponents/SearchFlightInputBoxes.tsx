/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useRecoilState, useRecoilValue } from "recoil";
import { DownArrowIcon, FromSVGIcon, InterChangeIcon, UpArrowIcon } from '../SVG'
import { useRef, useState } from "react";
import { flightSearchAtom, } from "@/app/lib/atoms/atom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandInput } from "@/components/ui/command";
import { SearchAirports } from "./SearchAiports";
export function SearchFlights() {
    const [startSearch, setStartSearch] = useState<boolean>(false);
    const [fromWhereOpen, setFromWhereOpen] = useState<boolean>(false);
    const [toWhereOpen, setToWhereOpen] = useState<boolean>(false);
    const [flightSearchVal , setFlightSearchVal] = useRecoilState(flightSearchAtom)
    const changeFromWhereVal = (e: string) => {
       
        setFlightSearchVal({
            ...flightSearchVal , 
            source : e
        })
    }
    const changeToWhereVal = (e: string) => {
        setFlightSearchVal({
            ...flightSearchVal, 
            destination : e
        })
    }
    return (
        <div className="wrap md:flex gap-2 ">
            <Popover open={fromWhereOpen} onOpenChange={setFromWhereOpen}>
                <PopoverTrigger asChild>
                    <div className="border-2 md:w-64 p-3 rounded-md flex justify-between">
                        <div className="flex gap-3">
                            <div className="flex flex-col justify-center">
                                <FromSVGIcon />
                            </div>
                            <div className={` cursor-pointer text-nowrap ${flightSearchVal.source ? 'absolute text-xs -z-10 text-gray-400 -mt-3 ease-in-out duration-200 ml-8' : 'flex flex-col  justify-center' }`}>
                                Where From?
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className={`overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer h-6 ${flightSearchVal.source && 'w-44'}`}>
                                     {flightSearchVal.source}
                                </div>
                            </div>
                        </div>
                        <button className="ml-1">
                            <div>
                                {fromWhereOpen ? <UpArrowIcon/> :<DownArrowIcon />  }
                            </div>
                        </button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-fit">
                    <SearchAirports type='src' />
                </PopoverContent>
            </Popover>
            <button className="flex flex-col justify-center" onClick={() => {
                if (flightSearchVal.source != '' && flightSearchVal.destination != '') {
                    setFlightSearchVal({
                        ...flightSearchVal , 
                        source : flightSearchVal.destination,
                        destination : flightSearchVal.source
                    })
                    
                }
            }}>
                <div className="flex justify-center rounded-full bg-gray-300 px-4 py-5 w-14">
                    <InterChangeIcon />
                </div>
            </button>
            {/* Search To  */}
            <Popover open={toWhereOpen} onOpenChange={setToWhereOpen}>
                <PopoverTrigger asChild>
                    <div className="border-2 md:w-64 p-3 rounded-md flex justify-between">
                        <div className="flex gap-3">
                            <div className="flex flex-col justify-center">
                                <FromSVGIcon />
                            </div>
                            <div className={`cursor-pointer ${flightSearchVal.destination ? 'absolute text-xs -z-10 text-gray-400 -mt-3 ease-in-out duration-200 ml-8' : 'flex flex-col justify-center' }`}>
                                <div>
                                Where To?
                                </div>
                            </div>
                            <div className="flex flex-col justify-center">
                            <div className={`overflow-hidden whitespace-nowrap text-ellipsis cursor-pointer h-6 ${flightSearchVal.destination && 'w-44'}`}>
                                    {flightSearchVal.destination}
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setStartSearch(!startSearch)} className="ml-1">
                            <div>
                               {toWhereOpen ? <UpArrowIcon/> : <DownArrowIcon />}
                            </div>
                        </button>
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-64">
                    <SearchAirports type='dest' />
                </PopoverContent>
            </Popover>
        </div>
    )
}