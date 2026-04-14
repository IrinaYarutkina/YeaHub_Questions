import styles from "./SearchInput.module.scss";
import searchIcon from '@/shared/assets/icons/SearchIcon.svg';

export const SearchInput = () => {
  return (
    <div className={styles.input_container}>
      <img src={searchIcon} className={styles.icon}/>
      <input
        type="text"
        placeholder="Введите запрос..."
        className={styles.searchInput}
      />
    </div>
  );
};
