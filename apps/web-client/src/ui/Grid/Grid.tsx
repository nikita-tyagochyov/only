import { type PropsWithChildren } from 'react';
import Square from '../Square/Square';

import styles from './Grid.module.scss';

export function Grid({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <Square />
      <Square />
      <Square />
      <Square />
      {children}
    </div>
  );
}

export default Grid;
