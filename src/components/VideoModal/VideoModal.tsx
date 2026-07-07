'use client';

import css from './VideoModal.module.css';
import { useEffect } from 'react';

type VideoModalProps = {
  isOpen: boolean;

  onClose: () => void;
};

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeBtn} onClick={onClose}>
          ✕
        </button>

        <video className={css.video} controls autoPlay playsInline>
          <source
            src="https://res.cloudinary.com/dfoiy9rn5/video/upload/v1783456926/devForge_grgbqi"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
