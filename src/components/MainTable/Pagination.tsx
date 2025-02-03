import React from "react";
import {
  DarkPageLeftIcon,
  DarkPageRightIcon,
  PageLeftIcon,
  PageRightIcon,
} from "../../darkIcons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isDark: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  isDark,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav className="flex items-center justify-center gap-2">
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        
        aria-label="Previous page"
      >
        {isDark ? <DarkPageLeftIcon /> : <PageLeftIcon />}
      </button>

      {getPageNumbers().map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            min-w-[28px] h-7 rounded-lg font-medium transition-all
            ${
              currentPage === page
                ? (isDark?"bg-[#FFFFFF1A] text-white":"bg-gray-100 text-black")
                : (isDark?"hover:bg-[#FFFFFF1A] text-white":"text-gray-600 hover:bg-gray-100")
            }
          `}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        
        aria-label="Next page"
      >
        {isDark ? <DarkPageRightIcon /> : <PageRightIcon />}
      </button>
    </nav>
  );
};

export default Pagination;
