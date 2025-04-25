import { observer } from 'mobx-react';
import styles from './PageCurrent.module.scss';
import { root } from '../../model';

export const PageCurrent = observer(function PageCurrent() {
  return <div className={styles.container}>{root.currentPageView}</div>;
});

export default PageCurrent;
