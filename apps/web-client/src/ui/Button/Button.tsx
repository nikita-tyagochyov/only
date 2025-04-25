import {
  useMemo,
  type ButtonHTMLAttributes,
  type DetailedHTMLProps,
} from 'react';

import styles from './Button.module.scss';

export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: 'primary' | 'secondary' | 'mobile';
  active?: boolean;
}

export function Button({
  variant = 'primary',
  className,
  active,
  ...props
}: ButtonProps) {
  const _className = useMemo(() => {
    return [
      styles.container,
      styles[variant],
      active && styles.active,
      className,
    ].join(' ');
  }, [className, variant, active]);

  return <button {...props} className={_className} />;
}

export default Button;
