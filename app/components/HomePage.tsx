'use client'

import { useRouter } from "next/navigation"

export function HomePageComp(){
    const router = useRouter();
    return <div>
        Home Page Redirect to flights page 
        <button onClick={()=> router.push('/flights')} className="bg-black text-white p-3 rounded-md">Click Here</button>
    </div>
}