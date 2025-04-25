import { observer } from 'mobx-react';
import Button from '../Button/Button';
import styles from './Circle.module.scss';
import { root } from '../../model';
import Name from '../Name/Name';
import { useMediaQuery } from 'usehooks-ts';

export const Circle = observer(function Circle() {
  const matches = useMediaQuery('(max-width : 320px)');
  if (matches) return null;
  return (
    <div className={styles.container}>
      <div className={styles.circle} style={root.circleRotate}>
        {root.circlePoints.map(({ key, style }, i) => (
          <Button
            key={key}
            variant="secondary"
            style={style}
            active={root.current === i}
            data-value={i}
            onClick={root.setCurrent}
          >
            {i + 1}
          </Button>
        ))}
      </div>
      <Name />
    </div>
  );
});

export default Circle;
