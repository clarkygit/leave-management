import { motion } from 'framer-motion';
import Stats from './Stats';
import ActivityHistoryTable from '../DataTables/ActivityHistoryTable'

export default function Dashboard(){
    return(
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} > {/* ENABLES ANIMATION */}
                <div className="pt-4"> {/* CANVAS DIV */}
                    
                    <Stats />

                    <div className="flex flex-col bg-white p-4 border border-gray-200 rounded-2xl shadow-2xl">
                        <h5 className='uppercase'>Leave History</h5>
                        <ActivityHistoryTable />
                    </div>
                </div>
            </motion.div>
        </>
    )
}