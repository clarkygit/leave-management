import { createContext, useContext, useState } from 'react';

export const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [modal, setModal] = useState({ isOpen: false, content: null, props: {} });
  const openModal = (content, props = {}) => { setModal({ isOpen: true, content, props }); };
  const closeModal = () => { setModal(prev => ({ ...prev, isOpen: false })); };

  const value = { openModal, closeModal };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modal.isOpen && (
        <Modal onClose={closeModal} {...modal.props}>
          {modal.content}
        </Modal>
      )}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}