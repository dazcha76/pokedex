import Pagination from 'react-bootstrap/Pagination';

type PaginationProps = {
  onPageChange: (page: string) => void;
};

export const PaginationComponent = ({ onPageChange }: PaginationProps) => {
  return (
    <Pagination size={'lg'}>
      <Pagination.Prev onClick={() => onPageChange('previous')} />
      <Pagination.Item onClick={() => onPageChange('2')}>{2}</Pagination.Item>
      <Pagination.Item onClick={() => onPageChange('3')}>{3}</Pagination.Item>
      <Pagination.Ellipsis />
      {/* <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item> */}
      <Pagination.Next onClick={() => onPageChange('next')} />
    </Pagination>
  );
};
