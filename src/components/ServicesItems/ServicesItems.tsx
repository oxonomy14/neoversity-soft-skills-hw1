import css from './ServicesItems.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesItems() {
  return (
    <>
      <ul className={css.serviceList}>
        <li className={css.serviceItem}>
          <div className={css.itemWrapper}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/services/homeCleaningv2.webp"
                alt="home cleaning"
                width={400}
                height={250}
                className={css.image}
              />
            </div>
            <div className={css.content}>
              <div className={css.iconItem}>
                <div className={css.iconWrapper}>
                  <svg className={css.homeIcon}>
                    <use href={`/icons/sprite.svg#icon-home`} />
                  </svg>
                </div>
              </div>
              <h3 className={css.title}>Home Cleaning</h3>
              <p className={css.description}>
                Professional home cleaning services that keep your living space
                fresh, clean, and comfortable.
              </p>
              <Link href="/" className={css.btn}>
                Learn More
              </Link>
            </div>
          </div>
        </li>
        <li className={css.serviceItem}>
          <div className={css.itemWrapper}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/services/officeCleaning.webp"
                alt="home cleaning"
                width={400}
                height={250}
                className={css.image}
              />
            </div>
            <div className={css.content}>
              <div className={css.iconItem}>
                <div className={css.iconWrapper}>
                  <svg className={css.officeIcon}>
                    <use href={`/icons/sprite.svg#icon-office`} />
                  </svg>
                </div>
              </div>
              <h3 className={css.title}>Office Cleaning</h3>
              <p className={css.description}>
                Professional office cleaning services that create a clean,
                healthy, and productive workspace.
              </p>
              <Link href="/" className={css.btn}>
                Learn More
              </Link>
            </div>
          </div>
        </li>
        <li className={css.serviceItem}>
          <div className={css.itemWrapper}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/services/furnitureCleaning.webp"
                alt="home cleaning"
                width={400}
                height={250}
                className={css.image}
              />
            </div>
            <div className={css.content}>
              <div className={css.iconItem}>
                <div className={css.iconWrapper}>
                  <svg className={css.furnitureIcon}>
                    <use href={`/icons/sprite.svg#icon-furniture`} />
                  </svg>
                </div>
              </div>
              <h3 className={css.title}>Furniture Cleaning</h3>
              <p className={css.description}>
                Expert upholstery and furniture cleaning services for a cleaner,
                fresher, and healthier home.
              </p>
              <Link href="/" className={css.btn}>
                Learn More
              </Link>
            </div>
          </div>
        </li>
        <li className={css.serviceItem}>
          <div className={css.itemWrapper}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/services/windowCleaning.webp"
                alt="home cleaning"
                width={400}
                height={250}
                className={css.image}
              />
            </div>
            <div className={css.content}>
              <div className={css.iconItem}>
                <div className={css.iconWrapper}>
                  <svg className={css.windowIcon}>
                    <use href={`/icons/sprite.svg#icon-window`} />
                  </svg>
                </div>
              </div>
              <h3 className={css.title}>Window Cleaning</h3>
              <p className={css.description}>
                Professional window cleaning services for crystal-clear views
                and a brighter space.
              </p>
              <Link href="/" className={css.btn}>
                Learn More
              </Link>
            </div>
          </div>
        </li>
        <li className={css.serviceItem}>
          <div className={css.itemWrapper}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/services/carpetCleaning.webp"
                alt="home cleaning"
                width={400}
                height={250}
                className={css.image}
              />
            </div>
            <div className={css.content}>
              <div className={css.iconItem}>
                <div className={css.iconWrapper}>
                  <svg className={css.carpetIcon}>
                    <use href={`/icons/sprite.svg#icon-carpet`} />
                  </svg>
                </div>
              </div>
              <h3 className={css.title}>Carpet Cleaning</h3>
              <p className={css.description}>
                Professional carpet cleaning services that remove dirt, stains,
                and allergens.
              </p>
              <Link href="/" className={css.btn}>
                Learn More
              </Link>
            </div>
          </div>
        </li>
        <li className={css.serviceItem}>
          <div className={css.itemWrapper}>
            <div className={css.imageWrapper}>
              <Image
                src="/images/services/laundryCleaning.webp"
                alt="home cleaning"
                width={400}
                height={250}
                className={css.image}
              />
            </div>
            <div className={css.content}>
              <div className={css.iconItem}>
                <div className={css.iconWrapper}>
                  <svg className={css.laundryIcon}>
                    <use href={`/icons/sprite.svg#icon-laundry`} />
                  </svg>
                </div>
              </div>
              <h3 className={css.title}>Laundry Services</h3>
              <p className={css.description}>
                Professional laundry services that keep your clothes fresh,
                clean, and ready to wear.
              </p>
              <Link href="/" className={css.btn}>
                Learn More
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
