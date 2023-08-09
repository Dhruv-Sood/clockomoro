import Navbar from "../components/Navbar"
import { useContext , useEffect } from "react"

import { DarkModeContext } from "../contexts/DarkModeContext"
import './TimerPage.css'
function TimerPage() {

    const { darkMode } = useContext(DarkModeContext)



    return (
        <>
            <Navbar />
            <div className={`h-remaining grid place-content-center ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
                <div className="w-[800px] h-[400px] rounded-xl border border-red-500 shadow-custom">
                    <div className="flex flex-col justify-center items-center">

                        <div className=" h-[80px] pt-2 px-2">
                            <h1 className=" tektur font-bold tracking-wider text-4xl m-1 gradient-red ">Code with timer, take breaks</h1>
                            <div className="h-1 gradient-underline w-full rounded-3xl" />
                        </div>

                        <div className="h-[312px] flex justify-center items-center w-full">
                            <div className="cutive px-4 py-2 rounded-2xl bg-white text-black hover:scale-[1.04] hover:cursor-pointer transition-all duration-[0.35s]">
                                START TIMER
                            </div>
                        </div>

                        </div>
                </div>
            </div>
        </>
    )
}
export default TimerPage