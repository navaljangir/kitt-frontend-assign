'use client'

import { useState } from "react";

export function GetGreeting(){
    const name = 'Brian';
    const [greet , setGreeting] = useState('Good Morning')
    const currTime = new Date();
    const hours = currTime.getHours()
    console.log(hours);
    if (hours >= 0 && hours < 12) {
        setGreeting('Good Morning')
    } else if (hours >= 12 && hours < 17) {
        setGreeting('Good Afternoon')
    } else if (hours >= 17 && hours <= 23) {
        setGreeting('Good Evening')
    }
    return <div className="flex justify-center text-7xl mt-28 mb-10">
    {greet} {name}
</div>
}