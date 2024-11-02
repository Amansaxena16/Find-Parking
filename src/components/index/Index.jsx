import logo from '../../assets/Logo.jpeg'
import Button from '../button/Button'
import Card from '../card/Card'

function Index(){
    return(
       <>
        {/* Navbar Start from here */}
        <div className="navbar flex items-center gap-x-5 pl-4 pt-4">
            <div className="brandLogo">
                <img className='w-32 h-auto' src={logo} alt="" />
            </div>
            <div className="nav_Heading flex items-center gap-x-5">
                <Button className="bg-yellow-300 hover:bg-yellow-400">New</Button>
                <span className="text-2xl text-yellow-400 font-extrabold tracking-[7px]">A NEW WAY TO FIND PARKING!!</span>
            </div>
        </div>
        {/* end here */}

        {/* Index page mid part start from here */}
        <div className="mid_heading text-center flex flex-col gap-y-3 py-20">
            <h1 className='text-9xl font-bold text-green-600'>Find Your Parking ?</h1>
            <span className='text-4xl font-light text-green-400'>Effortessly find your Parking Space</span>
        </div>
        {/* end here */}

        <hr />
        
        
        {/* How it works div start from here */}
        <div className="working_cards py-12">
            <div className="heading py-7">
                <h1 className='text-center text-4xl tracking-[4px] text-slate-500 font-bold'>How it Works!!</h1>
            </div>

            <div className="card flex">

            {/* card 1 */}
            <Card
                title="Find the Perfect Parking Spot" 
                content="Easily browse through available parking areas near your destination. With real-time availability, you're always guaranteed a spot when you need it most." 
            />

            {/* Card 2 */}
            <Card 
                title="Book and Reserve in Seconds" 
                content="Select your preferred parking area and book it instantly with just a few clicks. No more worrying about parking when you're on the go." 
            />

            {/* Card 3 */}
            <Card 
                title="Secure and Convenient Parking" 
                content="All our parking locations are secure, well-maintained, and conveniently located. Enjoy a stress-free experience every time you park with us." 
            />
            </div>
        </div>
        {/* end here */}

        {/* find space button */}
        <div className="find_button text-center py-8">
            <a href="/book">
                <Button className="text-4xl bg-red-400 px-12 py-3">Find Space</Button>
            </a>
        </div> 
        {/* end here */}
       </>
    )
}

export default Index