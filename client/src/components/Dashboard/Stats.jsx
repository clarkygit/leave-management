import { dashboardStats } from '../Data/DataPool'

export default function DashboardStats(){

    return(
        <>
            <div id="statCard" className="w-full flex flex-wrap justify-around"> {/* STATS HOLDER */}
                {dashboardStats
                    .filter(item=>item.active) // FILTERS OUT BASED ON ACTIVE VALUE - WHICH IS A BOOLEAN
                    .map((item) => (
                    <div key={item.title} className="flex bg-white shadow-2xl px-5 py-2 rounded-2xl mb-8"> {/* STATS */}
                        <div className="flex flex-col">
                            <h6 className="">{item.title}</h6>
                            <span className="text-5xl font-bold text-green-500">{item.balance}</span>
                            <span>{item.history}</span>
                        </div>
                        <svg height="100" width="100">
                            <circle r="40" cx="50" cy="50" className="text-gray-500" stroke-width="8" stroke="currentColor" fill="transparent" />
                            <circle class="text-green-500 origin-center -rotate-90 transition-all duration-500" stroke-width="8" stroke-linecap="round"
                            stroke="currentColor" fill="transparent" r="40" cx="50" cy="50" stroke-dasharray="251.2" 
                            stroke-dashoffset="calc(251.2 - (251.2 * var(--progress, 0.7)))" />
                        </svg>
                    </div>
                    ))
                }
            </div>
        </>
    )
}