'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface ModalContextType {
  showModal: boolean;
  toggleModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(prev => !prev);
  }
  return <ModalContext.Provider value={{ showModal, toggleModal }}>{children}</ModalContext.Provider>;
};
