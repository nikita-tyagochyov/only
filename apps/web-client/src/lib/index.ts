import { type CSSProperties, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';

export function useOpacity<T>(value: T) {
  const [state, setState] = useState(value);
  const [_styles, setStyles] = useState<CSSProperties>({ opacity: 1 });

  useEffect(() => {
    setStyles({ opacity: 0 });
    const timeout = setTimeout(() => {
      setStyles({ opacity: 1 });
      setState(value);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [value]);
  return { state, _styles };
}

export function useMedia() {
  return useMediaQuery('(max-width : 320px)');
}
