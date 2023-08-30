import React from "react";
import styles from "./Pagination.module.css";

type MobilePaginationProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
const MobilePagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: MobilePaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };
  return (
    <div className={styles.pagination}>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <div
            key={page}
            className={`${styles.paginationDot} ${
              currentPage === page ? styles.activeDot : ""
            }`}
            onClick={() => handlePageChange(page)}
          ></div>
        )
      )}
    </div>
  );
};

export default MobilePagination;
