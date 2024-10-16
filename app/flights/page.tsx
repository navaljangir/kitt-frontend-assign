
import { FlightCompMain } from "../components/FlightCompMain";
import { GetGreeting } from "../components/FlightSearchResult/Greeting";

export default function flightHomePage() {
    
    return (
        <div className="flex flex-col ">
            <GetGreeting/>
            <div className="flex justify-center">
                <div className="border-2 rounded-lg py-6 px-7">
                    <div className="bg-[#F5F7FA] w-32 rounded-md px-3 py-2 flex justify-center">
                        Flights
                    </div>
                    <div>
                        <FlightCompMain />
                    </div>
                </div>
            </div>
        </div>
    )
}