import type { ReactNode } from "react";
import styles from './ModalWindow.module.scss';


type Props = {
  children: ReactNode;
  onClose: () => void;
  className?: string;
}
export const ModalWindow = ({children, onClose, className} : Props) => {
  return (
  <div className={styles.overlay} onClick={onClose}>
    <div
      className={`${styles.drawer} ${className ?? ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
</div>
  )
}