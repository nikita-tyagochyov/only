import { useEffect, useState } from 'react';
import styles from './Year.module.scss';

export function Year({ value }: { value: number }) {
  const [currVal, setCurrVal] = useState(value);

  useEffect(() => {
    if (value === currVal) return;
    const interval = setInterval(() => {
      const c = value > currVal ? currVal + 1 : currVal - 1;
      setCurrVal(c);
      c === value && clearInterval(interval);
    }, Math.round(10000 / (100 / 1)));
    return () => {
      clearInterval(interval);
    };
  }, [currVal, value]);

  return <span className={styles.container}>{currVal}</span>;
}

export default Year;
