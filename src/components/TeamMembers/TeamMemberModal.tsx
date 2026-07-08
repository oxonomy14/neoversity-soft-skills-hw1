'use client';

import css from './TeamMemberModal.module.css';
import { useEffect } from 'react';
import { TeamMember } from '@/types/teamMember.types';
import Image from 'next/image';
import Link from 'next/link';

type TeamMemberModalProps = {
  isOpen: boolean;
  onClose: () => void;
  member?: TeamMember;
};

export default function TeamMemberModal({
  isOpen,
  onClose,
  member,
}: TeamMemberModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <div className={css.scrollContent}>
          <button className={css.closeBtn} onClick={onClose}>
            ✕
          </button>
          <div className={css.wrapper}>
            {/* LEFT */}
            <aside className={css.sidebar}>
              <Image
                src={`/images/teamMembers/${member.image}`}
                alt={member.name}
                width={320}
                height={400}
                className={css.image}
              />

              <h2 className={css.name}>{member.name}</h2>

              <p className={css.role}>{member.role}</p>

              <p className={css.shortDescription}>{member.shortDescription}</p>

              <div className={css.linksWrapper}>
                <Link
                  href={`${member.github}`}
                  className={css.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  href={`${member.linkedin}`}
                  className={css.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </div>
            </aside>

            {/* RIGHT */}
            <div className={css.content}>
              <section className={css.card}>
                <h3>About me</h3>
                <p>{member.story}</p>
              </section>
              <section className={css.card}>
                <h3>Experience</h3>
                <p>{member.experience}</p>
              </section>

              <section className={css.card}>
                <h3>Why Neoversity</h3>
                <p>{member.whyNeoversity}</p>
              </section>

              <section className={css.grid}>
                <div className={css.smallCard}>
                  <h4>🎯 Goal</h4>
                  <p>{member.goal}</p>
                </div>

                <div className={css.smallCard}>
                  <h4>⚡ Superpower</h4>
                  <p>{member.superpower}</p>
                </div>

                <div className={css.smallCard}>
                  <h4>🚀 Future Vision</h4>
                  <p>{member.future}</p>
                </div>
              </section>

              <section className={css.card}>
                <h3>Can help with</h3>

                <div className={css.skills}>
                  {member.canHelp.split(',').map((skill) => (
                    <span key={skill} className={css.skill}>
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
