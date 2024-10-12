/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useRecoilValue } from "recoil"
// import { FlightLoading } from "./FlightLoading"
import { flightSearchAtom } from "@/app/lib/atoms/atom"
import { airports, companyImageURL, flightData } from "@/app/lib/airportData";
import { useEffect, useState } from "react";
import { differenceInDays, differenceInMinutes, format } from "date-fns";
import { toast } from "sonner";
import { ShowFlightResult } from "./ShowFlightResult";
import { FlightSearchSideBar } from "./FlightSearchSideBar";
interface flightInterface {
   srcCode: string
   destCode: string
   takeoffTime: string
   landingTime: string
   price: number
   flightCode: string
   flightCompany: string
   stops: string[]
}
interface flightDataInterface {
   departure: flightInterface,
   return?: flightInterface
}
export function FlightsSearchResult() {
   const flightSearchVal = useRecoilValue(flightSearchAtom);
   const { srcCode, destCode, departureDate } = flightSearchVal
   const [flights, setFlights] = useState<flightDataInterface[]>([]);
   const [flightChoosen, setFlightChoosen] = useState({});
   const getAirpot = (val: string) => {
      airports.find((airport) => {
         return airport.code === val
      })
   }
   const [sideBarOpen, setSideBarOpen] = useState(false);
   useEffect(() => {
      toast.message('Search For 14 Oct 2024 To View Better', { duration: 2000 })
   }, [])
   useEffect(() => {

      const currDate = format(new Date(), 'yyyy-MM-dd')
      const departureDate = format(new Date(flightSearchVal.departureDate), 'yyyy-MM-dd')
      const departureFlights = flightData.filter((flight) => {
         const flightDeparutreDate = format(new Date(flight.takeoffTime), 'yyyy-MM-dd')
         if (currDate === departureDate) {
            return (new Date() < new Date(flight.takeoffTime) && departureDate == flightDeparutreDate && flight.srcCode === srcCode && flight.destCode === destCode)
         } else {
            return (departureDate === flightDeparutreDate && flight.srcCode === srcCode && flight.destCode === destCode)
         }
      })
      if (flightSearchVal.returnDate) {
         const returnFlights = flightData.filter((flight) => {
            const flightReturnDate = format(new Date(flight.landingTime), 'yyyy-MM-dd')
            const returnDate = format(flightSearchVal.returnDate || new Date(), 'yyyy-MM-dd')
            return flightReturnDate === returnDate && flightSearchVal.destCode === flight.srcCode && flightSearchVal.srcCode === flight.destCode
         })
         const pairedFlights: flightDataInterface[] = []
         departureFlights.forEach((depFlights) => {
            returnFlights.forEach((retFlight) => {
               const depLandingTime = new Date(depFlights.landingTime).getTime()
               const retTakeOffTime = new Date(retFlight.takeoffTime).getTime()
               const buffer = 60 * 60 * 1000
               if (retTakeOffTime > depLandingTime && retTakeOffTime - depLandingTime >= buffer) {
                  pairedFlights.push({
                     departure: depFlights,
                     return: retFlight
                  })
               }
            })
         })
         setFlights(pairedFlights)
      } else {
         setFlights(departureFlights.map((depFlight) => ({
            departure: depFlight
         })))
      }
   }, [srcCode, destCode, departureDate, flightSearchVal])


   const getImage = (company: string) => {
      const companyDetails = companyImageURL.find((companyURL) => {
         return companyURL.name == company
      })
      return companyDetails ? companyDetails.url : ''
   }


   const getTime = (time: string) => {
      const formattedTime = time ? format(new Date(time), 'hh:mm a') : format(new Date(), 'hh:mm a');
      return formattedTime
   }


   const getDayDifference = (time1 : string , time2 : string)=>{
      const date1 = new Date(time1) //landing 
      const date2 = new Date(time2) //take off
      date1.setHours(0,0,0,0)
      date2.setHours(0,0,0,0)
      const dayDifference = differenceInDays(date1, date2)
      console.log(dayDifference)
      return dayDifference
   }


   const getTimeDifference = (time1: string, time2: string) => {
      const date1 = new Date(time1);
      const date2 = new Date(time2);
      const differenceInMinute = differenceInMinutes(date2 , date1);
      const hours = Math.floor(differenceInMinute / 60);
      const minutes = differenceInMinute % 60;
      return `${hours}h ${minutes}min`
   }
   
   const defaultImg = 'https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png'
   return <div>

      <div className=" mx-56 mt-10">

         {flights.length > 0 ?
            <>

               <div className="text-gray-500 text-lg">
                  Showing 356 of 767 results
               </div>

               {flights.map((flight, index) => {
                  const departureTakeOff = flight.departure.takeoffTime
                  const departureLanding = flight.departure.landingTime
                  const returnTakeOff = flight.return?.takeoffTime
                  const returnLand = flight.return?.landingTime
                  return <div className="flex border-2 rounded-md mt-7 hover:bg-slate-200 cursor-pointer" key={index} onClick={()=> setSideBarOpen(!sideBarOpen)}>
                     <div className="w-full px-5 py-6">
                        <ShowFlightResult imgURL={getImage(flight.departure.flightCompany) || ''} 
                        company={flight.departure.flightCompany}
                        flightCode={flight.departure.flightCode}
                        time={`${getTime(departureTakeOff)} - ${getTime(departureLanding)}`}
                        route ={`${flight.departure.srcCode} - ${flight.departure.destCode}`}
                        timeDifference={getTimeDifference(departureTakeOff, departureLanding)}
                        stops={flight.departure.stops.length }
                        dayDifference={getDayDifference(departureLanding , departureTakeOff)}
                        />
                        {flightSearchVal.returnDate && <div className="mt-10">
                           <ShowFlightResult
                           imgURL={getImage(flight.return?.flightCompany || defaultImg)} 
                           company={flight.return?.flightCompany || ''}
                           flightCode={flight.return?.flightCode || ''}
                           time={`${getTime(returnTakeOff || '')} - ${getTime(returnLand || '')}`}
                           route ={`${flight.return?.srcCode} - ${flight.return?.destCode}`}
                           timeDifference={getTimeDifference(returnTakeOff || '', returnLand || '')}
                           stops={flight.return?.stops.length || 0}
                           dayDifference={getDayDifference(returnLand || '' , returnTakeOff || '')}
                           />
                        </div>}
                     </div>
                     <div className="border-[1px] border-gray-300 "></div>
                     <div className="flex items-end mx-3 mb-6">
                        <div className="flex flex-col">
                           <div className="text-sm text-gray-500">
                              from
                           </div>
                           <div>

                              {`AED ${flight.return?.price || 0 + flight.departure.price}`}
                           </div>
                           <button className="bg-[#003E39] rounded-md text-white px-20 py-3" onClick={() => {
                              setSideBarOpen(!sideBarOpen)
                              // setFlightChoosen()
                           }}>
                              Select
                           </button>
                        </div>
                     </div>
                  </div>
               })}
            </>
            : <div className="flex justify-center text-4xl">
               No Flights For This Date
            </div>}
         {
            sideBarOpen && <>
               <div className="fixed inset-0 bg-black opacity-30" onClick={() => {
                  setSideBarOpen(!sideBarOpen)
               }}>
               </div>
               <div className={`fixed right-0 top-0 bottom-0 my-3 mr-4 rounded-lg bg-white w-2/5 shadow-lg transition-transform transform duration-1000 ease-in-out${sideBarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                  <div className="h-full px-7">
                     <div>
                        <FlightSearchSideBar/>
                     </div>
                  </div>
               </div>
            </>
         }
      </div>
   </div>
}
