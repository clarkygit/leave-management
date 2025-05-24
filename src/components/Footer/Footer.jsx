

export default function Footer(){
    return(
        <>
            <div className='flex items-center pl-4 h-14 w-full'>
                <span className='text-sm text-gray-500'>© {new Date().getFullYear()} - Designed & built by David Clarke.</span>
            </div>
        </>
    )
}