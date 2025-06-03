import { useContext } from "react";
import { modalContext } from './Layout'

export default function Modal({ children}) {

  const {closeModal} = useContext(modalContext);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay - Dark Section */}
      <div className="absolute inset-0 bg-black/70" onClick={closeModal} ></div>

      {/* Modal content */}
      <div className="relative z-10 bg-white w-auto h-[95%] overflow-y-auto mr-5 p-6 rounded-2xl shadow-lg" > {/* Prevent closing when clicking inside */}
      
      {/* CLOSE BUTTON */}
      <div onClick={closeModal} className='p-0.5 cursor-pointer absolute top-2 right-2'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6">
          <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
        </svg>
      </div>

      {children} {/* Modal Content */}
      </div>
    </div>
  );
}