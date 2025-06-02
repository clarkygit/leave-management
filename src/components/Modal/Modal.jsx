import React from 'react';

export function Modal({ children, onClose, ...props }) {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Modal content */}
        <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all w-full max-w-md"
            onClick={e => e.stopPropagation()} {...props} >

          {/* Close button (optional) */}
          <button type="button" className="absolute top-4 right-4 text-gray-400 hover:text-gray-500" onClick={onClose} >
            ×
          </button>
          
          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}