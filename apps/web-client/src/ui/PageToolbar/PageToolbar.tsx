import { observer } from 'mobx-react';
import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRight from '../ArrowRight/ArrowRight';
import Button from '../Button/Button';
import styles from './PageToolbar.module.scss';
import { root } from '../../model';
import { useMedia } from '../../lib';
import { useMemo } from 'react';

export const PageToolbar = observer(function PageToolbar() {
  const matches = useMedia();
  const varinat = useMemo(() => {
    return matches ? 'mobile' : undefined;
  }, [matches]);
  return (
    <div className={styles.container}>
      <Button
        disabled={root.disbledPageButton.prev}
        onClick={root.setCurrent}
        data-value={root.current - 1}
        variant={varinat}
      >
        <ArrowLeft />
      </Button>
      <Button
        disabled={!root.disbledPageButton.next}
        data-value={root.current + 1}
        onClick={root.setCurrent}
        variant={varinat}
      >
        <ArrowRight />
      </Button>
    </div>
  );
});

export default PageToolbar;
