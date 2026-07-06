'use client';
import Container from '../Container/Container';
import { useState } from 'react';
import css from './TeamMembers.module.css';
import TeamMembersItems from '@/components/TeamMembersItems/TeamMembersItems';
import type { TeamMember } from '@/types/teamMember.types';

type TeamMembersProps = {
  cardMembers: TeamMember[];
  data: {
    subTitle: string;
    title: string;
    description: string;
    titleBtn: string;
  };
};

export default function TeamMembers({ cardMembers, data }: TeamMembersProps) {
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
              <p className={css.subTitle}>[ {data.subTitle} ]</p>
              <h2 className={css.title}>{data.title}</h2>
            </div>
            <div>
              <p className={css.description}>{data.description}</p>
            </div>
          </div>
          <TeamMembersItems
            activeId={activeId}
            openModal={openModal}
            closeModal={closeModal}
            cardMembers={cardMembers}
            titleBtn={data.titleBtn}
          />
        </Container>
      </section>
    </>
  );
}
