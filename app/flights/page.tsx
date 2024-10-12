
import { FlightCompMain } from "../components/FlightCompMain";

export default function flightHomePage() {
    const name = 'Brian';
    let greet = "Good Morning"
    const currTime = new Date();
    const hours = currTime.getHours()
    console.log(hours);
    if (hours >= 0 && hours < 12) {
        greet = 'Good Morning'
    } else if (hours >= 12 && hours < 17) {
        greet = 'Good Afternoon'
    } else if (hours >= 17 && hours <= 23) {
        greet = 'Good Evening'
    }
    return (
        <div className="flex flex-col ">
            <div className="flex justify-center text-7xl mt-28 mb-10">
                {greet} {name}
            </div>
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