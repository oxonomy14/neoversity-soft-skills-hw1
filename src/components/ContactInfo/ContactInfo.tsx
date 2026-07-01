import css from './ContactInfo.module.css';

export default function ContactInfo() {
  return (
    <div className={css.contactInfo}>
      <ul className={css.contactList}>
        <li>
          <div className={css.iconWrap}>
            <svg className={css.phoneIcon}>
              <use href={`/icons/sprite.svg#icon-phone`} />
            </svg>
          </div>
          <div>
            <p className={css.contactTitle}>Feel free to call us</p>
            <p className={css.contactNumber}>+1 (234) 567-8910</p>
          </div>
        </li>
        <li>
          <div className={css.iconWrap}>
            <svg className={css.emailIcon}>
              <use href={`/icons/sprite.svg#icon-email`} />
            </svg>
          </div>
          <div>
            <p className={css.contactTitle}>Email us for any questions</p>
            <p className={css.contactEmail}>hello@goodust.demo</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
