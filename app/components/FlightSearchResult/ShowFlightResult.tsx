'use client'

import Image from "next/image";
interface ShowFlightResult{
    imgURL : string 
    company : string
    flightCode : string
    time : string
    route : string
    timeDifference : string
    stops : number
    dayDifference : number
}
export function ShowFlightResult({imgURL , company , flightCode , time , route , timeDifference , stops , dayDifference } : ShowFlightResult){
    return <div className="flex w-full">
       <div className="flex justify-between w-full">
          <div className="flex items-center gap-2">
             <div className="relative w-11 h-11">
                <Image src={(imgURL || '')} fill style={{objectFit: 'contain'}} alt="Emirates img" sizes="h-5 w-5" />
             </div>
             <div className="">
                <div className="flex items-center text-xs text-gray-500 ">
                   <div>
                      {company}
                   </div>
                   <div className="w-[1px] h-[1px] border-2 rounded-full mx-2"></div>
                   <div className="">
                      {flightCode}
                   </div>
                </div>
                <div className="flex text-xl">
                   {time} 
                   <div className="text-xs font-bold text-red-700">
                     
                   {dayDifference >0 &&  <div >
                     +{dayDifference}Day
                   </div>
                  }
                   </div>
                </div>
             </div>
          </div>
          <div className='flex items-center'>
             <div className="flex flex-col">
                <div className="text-xs text-gray-500">
                   {route}
                </div>
                <div>
                   {timeDifference}
                </div>

             </div>
          </div>
       </div>
       <div className="ml-20 mr-10 text-nowrap flex items-center w-20">
          <div className="whitespace-nowrap overflow-hidden text-ellipsis">
             {!stops ? 'Non Stop' : `${stops} Stop`}
          </div>
       </div>
    </div>
}