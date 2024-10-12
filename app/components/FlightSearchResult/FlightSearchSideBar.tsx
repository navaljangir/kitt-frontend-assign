'use client'

import { BackArrow, Time } from "../SVG"
import { SideBarFlightDetails } from "./SideBarFlightDeatils"

export function FlightSearchSideBar() {
    return <div className="">
        <button className="my-10 bg-gray-300 w-fit p-2 rounded-full">
            <BackArrow />
        </button>
        <div className="font-extrabold text-xl">
            Flight Details
        </div>
        <div className="flex mt-4">
            <div className="flex flex-col ">
                <div className="border-[1px] w-3 h-3 mt-1 border-black rounded-full fill-none">
                </div>
                <div className="flex justify-center my-4">
                    <div className="border-l-[1px] h-[50px] border-gray-700">
                    </div>
                </div>
                <div className="border-[1px] w-3 h-3 border-black rounded-full fill-none">
                </div>
                <div className="flex justify-center my-4">
                </div>
                {
                    <div>
                        <div className="flex justify-center">
                            <div className="relative -mt-4 h-[200px] border-l-[2px] w-[1px] border-gray-400 border-dashed">
                            </div>
                        </div>
                        <div className="border-[1px] w-3 h-3 mt-4 border-black rounded-full fill-none">
                        </div>
                        <div className="flex justify-center my-4">
                            <div className="border-l-[1px] h-[50px] border-gray-700">
                            </div>
                        </div>
                        <div className="border-[1px] w-3 h-3 border-black rounded-full fill-none">
                        </div>
                        <div className="flex justify-center my-4">
                        </div>
                    </div>

                }
            </div>
            <div className="ml-2 w-full">
                <SideBarFlightDetails />
                {
                    <div>
                        <div className="flex text-gray-500 text-sm gap-2 py-24">
                            <div className="flex flex-col justify-center">
                                <Time />
                            </div>
                            <div className="">
                                Layover 2h 25m
                            </div>
                        </div>
                        <div>
                            <SideBarFlightDetails />
                        </div>
                    </div>


                }
            </div>
        </div>

    </div>
}