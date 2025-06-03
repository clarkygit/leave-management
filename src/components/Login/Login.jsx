import {Link, useNavigate } from "react-router-dom"

export default function Login(){
    const navigate = useNavigate();

    const loginSubmit = (e) =>{
        e.preventDefault();
        navigate("/dashboard");
    }

    return(
        <>
            <div className="h-screen w-screen flex justify-center items-center">
                <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto p-8 rounded-3xl bg-white shadow-2xl">
                    
                    <div id="logo" className="flex pt-2 pb-2 h-16 w-full justify-center items-center">
                        <Link to="/"><img className="w-28" src="../src/images/logo2.png"></img></Link>
                    </div>
                    
                    <form onSubmit={loginSubmit} method="POST" class="mt-8">
                        <div class="space-y-5">
                            <div>
                                <div class="mt-2.5">
                                    <input
                                        type="email"
                                        name="username"
                                        id="username"
                                        placeholder="Username"
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:bg-white caret-blue-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <div class="mt-2.5">
                                    <input
                                        type="text"
                                        name=""
                                        id="password"
                                        placeholder="Password"
                                        class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:bg-white caret-blue-600"
                                    />
                                </div>
                                <div class="flex items-center justify-end pt-2.5">
                                    <a href="#" title="" class="text-sm font-medium text-gray-600 hover:underline hover:text-teal-500 focus:text-blue-700"> Forgot password? </a>
                                </div>
                            </div>

                            <div>
                                <button id="submitBtn" type="submit" className="cursor-pointer inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-teal-500 border border-transparent rounded-md focus:outline-none hover:bg-teal-700 ">Log in</button>
                            </div>
                            <div className="flex justify-center items-center">
                                <span className="text-gray-500 text-xs">Don't have an account? Consult your HR personnel.</span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}