import styles from "./filterBlockTitle.module.scss";

type Props = {
  titleBlock: string;
};
export const FilterBlockTitle = ({ titleBlock }: Props) => {
  return <p className={styles.titleBlock}> {titleBlock} </p>;
};
