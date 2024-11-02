import Button from "../button/Button"
import ParkingArea from "../parkingArea/ParkingArea"

function Book(){
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
                <a href="#">
                    <Button className="bg-green-700">Book</Button>
                </a>
            </div>
           {/* end here */}

            {/* parking area div start from here */}
            <div className="area">
                <ParkingArea />  
            </div>
            {/* end here */}
        </>
    )
}

export default Book