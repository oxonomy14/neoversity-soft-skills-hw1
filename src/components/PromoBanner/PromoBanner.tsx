'use client';

import Container from '../Container/Container';
import css from './PromoBanner.module.css';
import { useState } from 'react';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';

type PromoBannerProps = {
  data: {
    title: string;
    description: string;
  };
};

export default function PromoBanner({ data }: PromoBannerProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section className={css.sectionWrapper}>
      <Container>
        <div className={css.contentWrapper}>
          <div className={css.content}>
            <h2 className={css.title}>{data.title}</h2>
            <p className={css.description}>{data.description}</p>
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
