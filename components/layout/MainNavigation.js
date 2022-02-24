import Link from 'next/link';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div>The React Dog Parks</div>
      <nav>
        <ul>
          <li>
            <Link href='/all-dog-parks'>All Dog Parks</Link>
          </li>
          <li>
            <Link href='/new-dog-park'>Add a New Dog Park</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default MainNavigation;