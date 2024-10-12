'use client'

import { airports } from "@/app/lib/airportData"
import { flightSearchAtom} from "@/app/lib/atoms/atom"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import {  useSetRecoilState } from "recoil"
// import { Check } from ""
// const  : Array<object>=TotalAirports;
export function SearchAirports({type } : {type : string}) {
    const setSearchFlightsVal = useSetRecoilState(flightSearchAtom);
    return <Command>
        <CommandInput placeholder="Search Flights" />
        <CommandList>
            <CommandEmpty> No Services</CommandEmpty>
            <CommandGroup>
                {airports.map((airport) => (
                    <CommandItem
                        key={airport.name}
                        value={airport.name}
                        onSelect={(currentValue) => {
                            if(type==='src'){
                                setSearchFlightsVal((flightSearchVal)=>({
                                    ...flightSearchVal , 
                                    source : currentValue,
                                    srcCode : airport.code
                                }))
                            
                            }else if(type==='dest'){
                                setSearchFlightsVal((flightSearchVal)=>({
                                    ...flightSearchVal , 
                                    destination : currentValue,
                                    destCode : airport.code
                                }))
                            }
                        }}
                    >
                        <div className="text-sm flex justify-between w-full">
                            <div className="flex flex-col">
                                <div>

                                    {airport.city}
                                </div>
                                <div className="text-gray-400">
                                    {airport.country}
                                </div>
                            </div>
                            <div className="">
                                {airport.code}
                            </div>
                        </div>
                    </CommandItem>
                ))}
            </CommandGroup>
        </CommandList>
    </Command>
}