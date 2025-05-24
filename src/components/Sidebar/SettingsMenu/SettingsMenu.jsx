import { Link } from "react-router-dom"
import { SettingsMenuData } from "../../Data/DataPool"

export default function SettingsMenu(){

    return(
        <>
            {/*SETTINGS MENU*/}
            <div id="settingsMenu" className="text-white text-sm">
                <ul className="flex flex-col">
                    {SettingsMenuData.map((item) => (
                        <li key={item.id} className="list-none mb-3 pl-5 hover:bg-teal-900 transition-colors">
                            <Link to={item.path}>
                                <div className="flex py-2">
                                    <div className="mr-2.5">
                                        {item.icon}
                                    </div>
                                    <span>{item.label}</span>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}