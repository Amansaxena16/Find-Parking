import React, {useState} from "react";

function ParkingArea({selectedSpots,setSelectedSpots}) {
    const rows = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index)); // A-Z
    const spotsPerRow = 10;

    // Function to handle selection of spot
    const handleSpotClick = (spotId) => {
        setSelectedSpots((prev) => {
            const newSelected = new Set(prev);
            if (newSelected.has(spotId)) {
                newSelected.delete(spotId); // Deselect if already selected
            } else {
                newSelected.add(spotId); // Select if not selected
            }
            return newSelected;
        })
    }

    return (
        <div className="p-5">
            <span className="text-slate-500 text-sm ml-12">Rs. 500 Per/Day</span>
            <div className="grid grid-cols-10 gap-y-6 justify-items-center">
                {rows.map(row => (
                    [...Array(spotsPerRow)].map((_, index) => {
                        const spotId = `${row}${index + 1}`;
                        const isSelected = selectedSpots.has(spotId);
                        return (
                            <div key={spotId} className={`flex items-center justify-center w-9 h-12  border border-green-500 rounded-md shadow-md  ${isSelected ? 'bg-green-600 text-white' : 'bg-white text-green-500'} `}onClick={() => handleSpotClick(spotId)}>
                                {spotId}
                            </div>
                        );
                    })
                ))}
            </div>
        </div>
    );
}

export default ParkingArea