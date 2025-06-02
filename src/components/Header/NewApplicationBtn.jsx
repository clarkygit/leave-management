import { useContext } from 'react';
import NewApplication from '../NewApplication';
import {modalContext} from '../Layout';


export default function NewApplicationBtn(){
    const {openModal} = useContext(modalContext);

    return(
        <>
            {/* NEW APPLICATION BUTTON */}
            <button onClick={()=>{openModal(<NewApplication/>)}} className="flex justify-between items-center bg-teal-500 mr-10 px-4 py-2 rounded-2xl text-white uppercase cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                </svg>
                <span className="ml-2">Apply for Leave</span>
            </button>
        </>
    )
}