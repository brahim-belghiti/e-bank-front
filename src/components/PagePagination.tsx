import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type TPaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
};

export function PagePagination({ currentPage, setCurrentPage, totalPages }: TPaginationProps) {
  console.log("🚀 ~ PagePagination ~ currentPage:", currentPage);
  const handleNextPage = () => {
    setCurrentPage((prevPage: number) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage: number) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePreviousPage} />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink key={index} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext onClick={handleNextPage} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
