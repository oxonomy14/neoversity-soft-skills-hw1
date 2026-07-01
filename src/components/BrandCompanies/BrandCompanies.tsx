import css from './BrandCompanies.module.css';
import Image from 'next/image';

export default function BrandCompanies() {
  return (
    <>
      <div className={css.brandCompanies}>
        <ul className={css.brandCompaniesList}>
          <li>
            <Image
              src="/images/brands/Brand-1.png"
              width={205}
              height={69}
              alt="Brand Logo"
            />
          </li>
          <li>
            <Image
              src="/images/brands/Brand-2.png"
              width={205}
              height={69}
              alt="Brand Logo"
            />
          </li>
          <li>
            <Image
              src="/images/brands/Brand-3.png"
              width={205}
              height={69}
              alt="Brand Logo"
            />
          </li>
          <li>
            <Image
              src="/images/brands/Brand-4.png"
              width={205}
              height={69}
              alt="Brand Logo"
            />
          </li>
          <li>
            <Image
              src="/images/brands/Brand-5.png"
              width={205}
              height={69}
              alt="Brand Logo"
            />
          </li>
          <li>
            <Image
              src="/images/brands/Brand-6.png"
              width={205}
              height={69}
              alt="Brand Logo"
            />
          </li>
        </ul>
      </div>
    </>
  );
}
