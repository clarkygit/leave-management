import { useState } from 'react';
import PageTitle from './PageTitle'
import Profile from "./Profile"
import NewApplicationBtn from './NewApplicationBtn';
import NewApplication from '../NewApplication';

export default function Header(){

    return(
        <>
            <div id="header" className="flex justify-between items-center pt-2 pb-2 border-b border-gray-400">
                <div> {/* LEFT SIDE */}
                    <PageTitle/>
                </div>

                <div className="flex items-center"> {/* RIGHT SIDE */}
                    <NewApplicationBtn />
                    {/* <button onClick={() => openModal(<NewApplication/>)}>BUTTON</button>  */}
                    <Profile/>
                </div>
            </div>
        </>
    )
}