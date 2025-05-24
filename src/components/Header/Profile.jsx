
export default function Profile(){

    return(
        <>
            <div className="flex">
                <div id="profilePhoto" className="w-12 h-12 rounded-full overflow-hidden bg-amber-400"> {/* PHOTO */}
                    <img className="w-full h-full object-cover" src="./src//images/dp.jpg"></img>
                </div>

                <span className="flex flex-col justify-center pl-2"> {/* DROP DOWN ICON */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </span>
            </div>
        </>
    )
}