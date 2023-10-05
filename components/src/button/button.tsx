import styles from './button.module.scss'
import { HtmlHTMLAttributes } from 'react'

export type ButtonVariant = 'text' | 'contained' | 'outlined';
export type ButtonColor = 'primary' | 'secondary' | 'accent';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  pill?: boolean;
}

export function Button(props: ButtonProps) {
  const { children, variant = 'contained', size = 'medium', color = 'primary', pill = false, ...rest } = props;

  function getStyles(): string {
    return styles.base.concat(
      styles[`${color}-${variant}`],
      styles[variant],
      styles[size],
      pill ? styles.pill : "");
  }

  return (
    <button
      className={getStyles()}
      {...rest}>
        {children}
    </button>
  ) 
}
