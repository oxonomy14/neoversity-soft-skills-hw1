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
            <h2 className={css.title}>
              Trusted Cleaning Solutions for Every Space
            </h2>
            <p className={css.description}>
              From home cleaning and office maintenance to deep cleaning
              services, our experienced team provides dependable, high-quality
              cleaning solutions designed to keep your space fresh, organized,
              and welcoming year-round.
            </p>
            <Link className={css.btnViewService} href="#service">
              View Our Service
            </Link>
          </div>
          <div className={css.btnWrapper}>
            <button
              onClick={() => setIsVideoOpen(true)}
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
