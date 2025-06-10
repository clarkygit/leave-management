import {Link} from "react-router-dom"

export default function Branding(){

    return(
        <>
            <div id="logo" className="flex pt-2 pb-2 h-16 w-full justify-center items-center">
                <Link to="/dashboard"><img className="w-20" src="./src/images/logo.png"></img></Link>
            </div>
        </>
    )
}