'use client';
import Container from '../Container/Container';
import { useState } from 'react';
import css from './TeamMembers.module.css';
import TeamMembersItems from '@/components/TeamMembersItems/TeamMembersItems';
import type { TeamMember } from '@/types/teamMember.types';

export default function TeamMembers({
  cardMembers,
}: {
  cardMembers: TeamMember[];
}) {
  const [activeId, setActiveId] = useState<number | null>(null);

  const openModal = (id: number) => {
    setActiveId(id);
  };

  const closeModal = () => {
    setActiveId(null);
  };
  return (
    <>
      <section className={css.sectionServices} id="team-members">
        <Container>
          <div className={css.contentWrapper}>
            <div>
              <p className={css.subTitle}>[ Team Members ]</p>
              <h2 className={css.title}>Meet The People Behind DevForge</h2>
            </div>
            <div>
              <p className={css.description}>
                Behind every line of code is a unique story. Our team is made up
                of individuals with different backgrounds, experiences, and
                ambitions, united by a shared passion for technology,
                collaboration, and continuous growth. Get to know the people
                shaping DevForge.
              </p>
            </div>
          </div>
          <TeamMembersItems
            activeId={activeId}
            openModal={openModal}
            closeModal={closeModal}
            cardMembers={cardMembers}
          />
        </Container>
      </section>
    </>
  );
}
