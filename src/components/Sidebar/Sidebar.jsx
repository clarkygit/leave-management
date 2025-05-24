import { Link } from "react-router-dom"
import Branding from "./Branding"
import MainMenu from "./MainMenu/MainMenu"
import SettingsMenu from "./SettingsMenu/SettingsMenu"

export default function Sidebar(){
    return(
        <>
            <div className="flex flex-col justify-between h-screen w-60 bg-gradient-to-br from-gray-700 to-black overflow-auto">
                <div className="flex flex-col">
                    <Branding/> {/*LOGO*/}
                    <hr class="h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"></hr>
                    <MainMenu/> {/* MAIN MENU */}
                </div>

                <div>
                    <SettingsMenu/>
                </div>
            </div>
        </>
    )
}