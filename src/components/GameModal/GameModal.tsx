import React, { useEffect } from 'react';
import './GameModal.scss';

type GameModalProps = {
  isOpen: boolean;
  closeModal: () => void;
}

const GameModal: React.FunctionComponent<GameModalProps> = ({ isOpen, closeModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>&times;</button>
            <iframe
              id="modalIframe"
              allowFullScreen
              width="960"
              height="670"
              title="Game Modal Iframe"
              src="https://itch.io/embed-upload/10663898?color=333333"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default GameModal;
