import { observer } from 'mobx-react';

import styles from './SlideContent.module.scss';

import { type Content } from '../../model';

export type SlideContentProps = Content;

export const SlideContent = observer(function SlideContent({
  year,
  aticle,
}: SlideContentProps) {
  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{year}</h4>
      <span className={styles.aticle}>{aticle}</span>
    </div>
  );
});

export default SlideContent;
