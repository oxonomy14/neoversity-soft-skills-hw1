import css from './TeamMembersCards.module.css';
import Image from 'next/image';
import { TeamMember } from '@/types/teamMember.types';

type TeamMembersCardsProps = {
  member: TeamMember;
  openModal: (id: number) => void;
  titleBtn: string;
};

export default function TeamMembersCards({
  member,
  openModal,
  titleBtn,
}: TeamMembersCardsProps) {
  return (
    <>
      <li className={css.serviceItem} key={member.id}>
        <div className={css.itemWrapper}>
          <div className={css.imageWrapper}>
            <Image
              src={`/images/teamMembers/${member.image}`}
              alt={`${member.name}'s profile picture`}
              width={400}
              height={450}
              className={css.image}
            />
            <div className={css.memberBadge}>{member.role}</div>
          </div>

          <div className={css.content}>
            <h3 className={css.title}>{member.name}</h3>
            <p className={css.description}>{member.shortDescription}</p>

            <button className={css.btn} onClick={() => openModal(member.id)}>
              {titleBtn}
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
