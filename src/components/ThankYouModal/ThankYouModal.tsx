'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import css from './ThankYouModal.module.css';

type ThankYouModalProps = {
  isOpen: boolean;
  orderId: string;
  onClose: () => void;
};

export default function ThankYouModal({
  isOpen,
  onClose,
  orderId,
}: ThankYouModalProps) {
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

        <h2 className={css.modalTitle}>Thank You for Your Booking!!</h2>

        <p className={css.modalText}>
          Your appointment request has been successfully submitted. Our team
          will contact you shortly.
        </p>
        <p className={css.modalText2}>
          To receive booking confirmations and service updates, connect with us
          on Telegram or WhatsApp.
        </p>

        <div className={css.socialBtnWrapper}>
          <Link
            href={`https://t.me/GoodustSupportBot?start=${orderId}`}
            target="_blank"
            rel="noopener noreferrer"
            className={css.socialBtnTelegrem}
          >
            Receive Updates in Telegram
          </Link>
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={`${css.socialBtnWhatsApp} ${css.socialBtnDisabled}`}
            aria-disabled="true"
          >
            Get Updates via WhatsApp
          </Link>
        </div>

        {/*        <button className={css.modalButton} onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
}
