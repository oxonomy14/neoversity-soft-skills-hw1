import css from './TeamMembersItems.module.css';

import type { TeamMember } from '@/types/teamMember.types';
import TeamMembersCards from '../TeamMembers/TeamMembersCards';

import TeamMemberModal from '../TeamMembers/TeamMemberModal';

type Props = {
  activeId: number | null;
  openModal: (id: number) => void;
  closeModal: () => void;
  cardMembers: TeamMember[];
};

export default function TeamMembersItems({
  activeId,
  openModal,
  closeModal,
  cardMembers,
}: Props) {
  const selectedMember = cardMembers.find((member) => member.id === activeId);
  return (
    <>
      <ul className={css.serviceList}>
        {cardMembers.map((member) => (
          <TeamMembersCards
            member={member}
            key={member.id}
            openModal={openModal}
          />
        ))}
      </ul>
      <TeamMemberModal
        isOpen={!!selectedMember}
        member={selectedMember}
        onClose={closeModal}
      />
    </>
  );
}
