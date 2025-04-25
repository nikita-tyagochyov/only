import Line from '../Line/Line';
import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
      <Line />
      <h1 className={styles.header}>Исторические даты</h1>
    </div>
  );
}

export default Header;
