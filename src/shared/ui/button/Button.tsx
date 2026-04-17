import type { ButtonHTMLAttributes } from "react";
import styles from './Button.module.scss';

type Props = {
  className?: string | undefined,
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({className, children, ...props}: Props ) => {
  return (
    <button className={`${styles.button} ${className ?? ""}`} {...props}> 
    {children}
  </button>
  )
}

