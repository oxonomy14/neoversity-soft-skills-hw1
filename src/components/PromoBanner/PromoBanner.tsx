'use client';

import Container from '../Container/Container';
import css from './PromoBanner.module.css';
import { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';

export default function PromoBanner() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.content}>
            <h2 className={css.title}>Building More Than Code</h2>
            <p className={css.description}>
              At DevForge, we believe that great software starts with great
              people. Every challenge, collaboration, and late-night debugging
              session helps us grow—not only as developers but also as
              teammates. This project reflects our journey, our shared
              ambitions, and the future we're building together.
            </p>
            {/*      <Link className={css.btnViewService} href="#">
            Discover Our Journey
            </Link> */}
          </div>
          <div className={css.btnWrapper}>
            <button
              onClick={() => alert('Video modal is not implemented yet.')}
              className={css.btnPlay}
            >
              <svg className={css.playIcon}>
                <use href={`/icons/sprite.svg#icon-play`} />
              </svg>
            </button>
          </div>
        </div>
      </Container>
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
