import { ArrowBack } from "@/shared/assets/components/ArrowBack";
import styles from "./Pagination.module.scss";
import { ArrowNext } from "@/shared/assets/components/ArrowNext";

type PropsPagination = {
  currentPage: number;
  totalPages: number;
  visiblePages?: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPages,
  // visiblePages = 6,
  onPageChange,
}: PropsPagination) => {
  const pagination: (number | string)[] = [];
  pagination.push(1);

  if (totalPages <= 0) return null;

  if (totalPages <= 6) {
    for (let i = 2; i < totalPages; i++) {
      pagination.push(i);
    }
  } else {
    if (currentPage > 4) {
      pagination.push("...");
    }
  }
  const start = Math.max(2, currentPage - 2);
  const end = Math.min(totalPages - 1, currentPage + 2);
  for (let i = start; i <= end; i++) {
    pagination.push(i);
  }
  if (currentPage < totalPages - 3) {
    pagination.push("...");
  }
  if (totalPages > 1) {
    pagination.push(totalPages);
  }

  return (
    <div className={styles.pagination}>
      <button
        className={styles.btn_arrow}
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
      >
        <ArrowBack />
      </button>

      <ul className={styles.numbersPages}>
        {pagination.map((page, index) => (
          <li key={index}>
            {typeof page === "number" ? (
              <button
                className={
                  page === currentPage ? styles.active : styles.inactive
                }
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            ) : (
              <div className={styles.dots}> {page}</div>
            )}
          </li>
        ))}
      </ul>

      <button
        className={styles.btn_arrow}
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
      >
        <ArrowNext />
      </button>
    </div>
  );
};
