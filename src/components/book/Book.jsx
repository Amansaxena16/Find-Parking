import Button from "../button/Button"
import ParkingArea from "../parkingArea/ParkingArea"
import { useState } from "react";

function Book(){
    // Lifted state: selectedSpots and setSelectedSpots
    const [selectedSpots, setSelectedSpots] = useState(new Set());

    function handleBookSpots(){
        console.log('clicked')
        if (selectedSpots.size === 0) {
            alert("Please select a spot to book.");
            return;
        }
        else{
            alert(`Booking confirmed for spots: ${[...selectedSpots].join(', ')}`);
            setSelectedSpots(new Set()); // Clear selection after booking
        }
    }
    return(
        <>
        {/* Space Info Navbar div start from here */}
            <div className="space_info flex justify-center gap-x-4 pt-4">
                <div className="available flex items-center gap-x-1">
                    <div className="box w-4 h-4 border border-green-600 rounded-[2px]"></div>
                    <span className="text-slate-500">Available</span>
                </div>
                <div className="available flex items-center gap-x-1">
                    <div className="box w-4 h-4 border bg-green-600 rounded-[2px]"></div>
                    <span className="text-slate-500">Selected</span>
                </div>
                <div className="available flex items-center gap-x-1">
                    <div className="box w-4 h-4 border bg-slate-200 rounded-[2px]"></div>
                    <span className="text-slate-500">Sold</span>
                </div>
                <Button onClick={handleBookSpots} className="bg-green-700">Book Spots</Button>
            </div>
           {/* end here */}

            {/* parking area div start from here */}
            <div className="area">
                {/* Pass selectedSpots and setSelectedSpots as props */}
                <ParkingArea
                    selectedSpots={selectedSpots}
                    setSelectedSpots={setSelectedSpots}
                />
            </div>
            {/* end here */}
        </>
    )
}

export default Book