import PageCurrent from '../PageCurrent/PageCurrent';
import PageToolbar from '../PageToolbar/PageToolbar';
import styles from './Pages.module.scss';

export function Pages() {
  return (
    <div className={styles.container}>
      <PageCurrent />
      <PageToolbar />
    </div>
  );
}

export default Pages;
