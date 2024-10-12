'use client'
export function LineAnimation(){
    return  <div className="relative w-full h-1 bg-gray-200 overflow-hidden">
    <div className="absolute w-full h-full bg-gradient-to-r from-transparent via-blue-800 to-transparent animate-slide"></div>
  </div>
}