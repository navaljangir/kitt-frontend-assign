'use client'
import Image from 'next/image'
export function SideBarFlightDetails() {
    const url = 'https://logos-world.net/wp-content/uploads/2023/02/Air-India-Logo.png'
    return <div className="flex justify-between w-full">
        <div className="flex flex-col gap-12">
            <div>
                <div className="flex text-gray-500 text-xs">
                    <div>
                        Sat 28 Sept
                    </div>
                    <div className="flex flex-col justify-center mx-1">
                        <div className="w-[1px] h-[1px] border-2 rounded-full">
                        </div>
                    </div>
                    <div>
                        2:15
                    </div>
                </div>
                <div className="flex font-bold">
                    <div>
                        DXB
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="border-[3px] w-[3px] h-[3px] mx-1 rounded-full border-black"></div>
                    </div>
                    <div>
                        Dubai International Airport
                    </div>
                </div>
            </div>
            <div>

                <div className="flex text-gray-500 text-xs">
                    <div>
                        Sat 28 Sept
                    </div>
                    <div className="flex flex-col justify-center mx-1">
                        <div className="w-[1px] h-[1px] border-2 rounded-full">
                        </div>
                    </div>
                    <div>
                        2:15
                    </div>
                </div>
                <div className="flex font-bold">
                    <div>
                        RUH
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="border-[3px] w-[3px] h-[3px] mx-1 rounded-full border-black"></div>
                    </div>
                    <div>
                        King Khalid International Airport
                    </div>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-5">
            <div className="relative w-11 h-11 border-[2px]">
                <Image src={`${url}`} fill style={{objectFit:'contain'}} alt="Air India img" sizes="h-5 w-5" />
            </div>
            <div className='text-gray-500 text-xs'>
                <div className='flex'>
                    Saudi Arbian Flights
                    <div className='flex flex-col justify-center mx-1'>
                        <div className="border-[2px] w-[2px] h-[2px] mx-1 rounded-full border-gray-500"></div>
                    </div>
                    SV563
                </div>
                <div className='flex'>
                    Economy 
                    <div className='flex flex-col justify-center mx-1'>
                        <div className="border-[2px] w-[2px] h-[2px] mx-1 rounded-full border-gray-500"></div>
                    </div>
                    A330
                </div>
                <div>
                    Flight Time 3h 45m
                </div>
            </div>
        </div>
    </div>
}