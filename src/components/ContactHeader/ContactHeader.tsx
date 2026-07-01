import css from './ContactHeader.module.css';

export default function ContactHeader() {
  return (
    <div className={css.contactHeader}>
      <ul className={css.contactList}>
        <li>
          <div className={css.iconWrap}>
            <svg className={css.phoneIcon}>
              <use href={`/icons/sprite.svg#icon-phone`} />
            </svg>
          </div>
          <div>
            <p className={css.contactTitle}>Customer Support</p>
            <p className={css.contactNumber}>+66 (80) 567-89-10</p>
          </div>
        </li>
        <li>
          <div className={css.iconWrap}>
            <svg className={css.emailIcon}>
              <use href={`/icons/sprite.svg#icon-email`} />
            </svg>
          </div>
          <div>
            <p className={css.contactTitle}>Email Support</p>
            <p className={css.contactEmail}>hello@goodust.co.th</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
