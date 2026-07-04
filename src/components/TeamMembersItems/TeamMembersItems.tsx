import css from './TeamMembersItems.module.css';

import { teamMembers } from '@/data/teamMembers';
import TeamMembersCards from '../TeamMembers/TeamMembersCards';

import TeamMemberModal from '../TeamMembers/TeamMemberModal';

type Props = {
  activeId: number | null;
  openModal: (id: number) => void;
  closeModal: () => void;
};

export default function TeamMembersItems({
  activeId,
  openModal,
  closeModal,
}: Props) {
  const selectedMember = teamMembers.find((member) => member.id === activeId);
  return (
    <>
      <ul className={css.serviceList}>
        {teamMembers.map((member) => (
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
