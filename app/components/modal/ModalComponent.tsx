import React, { useState, useEffect, useRef } from "react";
import ModalForm from "./ModalForm";

const ModalComponent: React.FC = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Function to open modal
  const handleOpen = () => setOpen(true);

  // Function to close modal
  const handleClose = () => setOpen(false);

  // Close modal when clicking outside of it
  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <>
      {/* Trigger button to open modal */}
      <button
        onClick={handleOpen}
        className="bg-purple-500 rounded h-10 px-5 py-6 text-white flex items-center justify-center"
      >
        Create Task
      </button>
      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleClose}
        >
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="bg-white p-8 rounded-lg shadow-lg w-full h-[96vh] max-w-[800px] relative overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalForm closeModal={handleClose} />
          </div>
        </div>
      )}
    </>
  );
};

export default ModalComponent;
