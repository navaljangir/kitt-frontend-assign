'use client'


import { Skeleton } from "@/components/ui/skeleton"

export function FlightLoading() {
  return  <div className="flex w-full">
  <div className="flex justify-between w-full">
    <div className="flex items-center gap-2">
      <Skeleton className="w-11 h-11 bg-gradient-to-r from-gray-300 to-gray-100" />
      <div>
        <div className="flex items-center text-xs text-gray-500">
          <Skeleton className="w-16 h-4 rounded bg-gradient-to-r from-gray-300 to-gray-100" />
          <div className="w-[1px] h-[1px] border-2 rounded-full mx-2"></div>
          <Skeleton className="w-12 h-4 rounded bg-gradient-to-r from-gray-300 to-gray-100" />
        </div>
        <div className="flex text-xl mt-1">
          <Skeleton className="w-10 h-5 rounded bg-gradient-to-r from-gray-300 to-gray-100" />
          <div className="ml-2 text-xs font-bold text-red-700">
            <Skeleton className="w-8 h-3 rounded bg-gradient-to-r from-gray-300 to-gray-100" />
          </div>
        </div>
      </div>
    </div>

    <div className="flex items-center">
      <div className="flex flex-col">
        <Skeleton className="w-20 h-4 rounded mb-2 bg-gradient-to-r from-gray-300 to-gray-100" />
        <Skeleton className="w-12 h-4 rounded bg-gradient-to-r from-gray-300 to-gray-100" />
      </div>
    </div>
  </div>
  <div className="ml-20 mr-10 text-nowrap flex items-center w-20">
    <Skeleton className="w-full h-4 rounded bg-gradient-to-r from-gray-300 to-gray-100" />
  </div>
</div>
}