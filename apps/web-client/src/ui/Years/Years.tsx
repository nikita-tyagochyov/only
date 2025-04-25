import { observer } from 'mobx-react';
import Year from '../Year/Year';
import styles from './Years.module.scss';
import { root } from '../../model';

export const Years = observer(function Years() {
  return (
    <div className={styles.container}>
      <Year value={root.years.first} />
      <Year value={root.years.last} />
    </div>
  );
});

export default Years;
