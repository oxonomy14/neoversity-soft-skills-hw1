import Container from '../Container/Container';
import Logo from '../Logo/Logo';
import css from './Header.module.css';
import Navigation from '../Navigation/Navigation';
import ButtonNav from '../ButtonNav/ButtonNav';

export default function Header() {
  return (
    <header className={css.header}>
      <Container>
        <div className={css.headerWrapper}>
          <div className={css.headerTop}>
            <Logo />
          </div>
          <div className={css.headerBottom}>
            <Navigation />
            <ButtonNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
