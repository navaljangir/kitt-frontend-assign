/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { CalenderIcon, SearchIcon } from "../SVG";
import { DatePicker } from "./DatePicker";
import { SearchFlights } from "./SearchFlightInputBoxes";
import { useRecoilValue } from "recoil";
import { flightSearchAtom } from "@/app/lib/atoms/atom";
import { toast } from "sonner";
import { format } from "date-fns";
import { useRouter } from "next/navigation";


export function FlightComp({toggleNavBar} : {toggleNavBar? : ()=> void}) {

    const sameAirportsMessage = "Source and destination airports must be different.";
    const searchFlightVal = useRecoilValue(flightSearchAtom);
    const departureDate = searchFlightVal.departureDate
    const returnDate = searchFlightVal.returnDate
    const router = useRouter();
    const searchFlight = () => {
        if (!searchFlightVal.source || !searchFlightVal.destination) {
            toast.error('Select the Source and Destination Both', {
                duration: 2000,
                className: 'text-red-500'
            })
        }
        else if (searchFlightVal.source === searchFlightVal.destination) {
            toast.error(sameAirportsMessage, {
                duration: 2000,
                className: 'text-red-500'
            })
        } else if (returnDate && departureDate && returnDate < departureDate) {
            toast.error(`Select a return Date On And After ${departureDate ? format(departureDate, 'PPP') : ''}`, {
                duration: 2000,
                className: 'text-red-500'
            })
        } else {
            const query = new URLSearchParams({
                src: searchFlightVal.srcCode,
                dest: searchFlightVal.destCode,
                dDate: format(searchFlightVal.departureDate , 'yyyy-MM-dd')
            })
            if(searchFlightVal.returnDate){
                query.append('rDate' , format(searchFlightVal.returnDate , 'yyyy-MM-dd'))
            }
            router.push(`/flights/search?${query}`)
            toggleNavBar?.();
        }
    }

    return (<div className="flex flex-col">
        {/*  Search from where? */}
        <div className="flex mt-8 gap-8">
            <SearchFlights />
            <div className="flex gap-3">
                <div className="border-2 p-3 rounded-md flex flex-col justify-center">
                    <div className="gap-2 flex">
                        <CalenderIcon />
                        <DatePicker type='Departure' />
                    </div>
                </div>
                <div className="border-2 p-3 rounded-md flex flex-col justify-center">
                    <div className="gap-2 flex">
                        <CalenderIcon />
                        <DatePicker type='Return' />
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-3 text-right">
            <button className="bg-[#003E39] text-white px-10 py-3 px- rounded-md"
                onClick={searchFlight}>
                <div className="flex gap-2">
                    <div className="flex flex-col justify-center">
                        <SearchIcon />
                    </div>
                    <div>
                        Search Flights
                    </div>
                </div>
            </button>
        </div>
    </div>
    )
}