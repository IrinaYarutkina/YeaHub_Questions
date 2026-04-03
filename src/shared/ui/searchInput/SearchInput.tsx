import styles from "./SearchInput.module.scss";
export const SearchInput = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Введите запрос..."
        className={styles.SearchInput}
      />
    </div>
  );
};
