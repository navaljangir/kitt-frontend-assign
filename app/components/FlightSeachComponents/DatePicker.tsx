'use client'
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {format} from 'date-fns'
import { useRecoilState } from "recoil"
import {flightSearchAtom } from "@/app/lib/atoms/atom"

export function DatePicker({type}: {type : string}){
    const [searchFlightVal , setSearchFlightVal] = useRecoilState(flightSearchAtom);
    return (
        <Popover>
        <PopoverTrigger asChild>
            <button className={`w-[177px] justify-start text-left font-normal `}>
                {type==='Departure' ? (searchFlightVal.departureDate ? format(searchFlightVal.departureDate , 'PPP') : <div>{type}</div>) : (searchFlightVal.returnDate? format(searchFlightVal.returnDate, 'PPP') : <div>{type}</div>) }
            </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 flex -ml-7">
            <Calendar
                mode="single"
                selected={type==='Departure' ? searchFlightVal.departureDate: searchFlightVal.returnDate}
                onSelect={(date)=>  { if (type === 'Departure') {
                    setSearchFlightVal({
                        ...searchFlightVal , 
                        departureDate : date || new Date()
                    })
                } else {
                    setSearchFlightVal({
                        ...searchFlightVal , 
                        returnDate : date || undefined
                    })
                }}} 
                initialFocus
                disabled={(date)=> {
                    const currDate = new Date();
                    currDate.setHours(0 ,0, 0, 0)
                    const departureDate = searchFlightVal.departureDate
                    departureDate.setHours(0, 0, 0, 0);
                    if(type=== 'Departure'){
                        return  date< currDate;
                    }else{
                        return searchFlightVal.departureDate ?  date < departureDate: date < currDate;
                    }
                }}
            />
        </PopoverContent>
    </Popover>
    )
}