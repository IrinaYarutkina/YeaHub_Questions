import styles from './Skeleton.module.scss';
import cn from 'classnames';

type Props = {
  className?: string,
  width?: string | number,
  height?: string | number,
  borderRadius?: string | number
}

export const Skeleton = ( {className, width = '100%', height = '20px', borderRadius = '8px'} : Props ) => {
  return (
    <div
      className={cn( styles.skeleton, className)}
      style={ {width, height, borderRadius}}
    />
  )
}