import { Outlet } from "react-router-dom"
import { createContext, useState } from 'react';
import Modal from './Modal';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const modalContext = createContext();

export default function Layout(){

    {/* MODAL */}
    const [modalContent, setModalContent] = useState(null);
    const openModal = (component) => setModalContent(component);
    const closeModal = () => setModalContent(null);

    return(
        <>
            <modalContext.Provider value={{openModal, closeModal}}> {/* PASS OPEN MODAL VARIABLE TO NESTED COMPONENTS */}
                <div className='flex h-screen w-screen'>
                    <div>
                        <Sidebar/>
                    </div>

                    <div id='canvas' className='flex-grow px-4 h-screen overflow-auto'>
                        <Header />
                        <Outlet/> {/* Components/Pages will go here - Provided by Routes */}
                        <Footer/>
                    </div>
                </div>

                {modalContent && (
                    <Modal>
                        {modalContent}
                    </Modal>
                )}
            </modalContext.Provider>
        </>
    )
}