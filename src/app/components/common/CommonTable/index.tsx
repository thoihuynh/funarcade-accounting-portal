import Table from '@mui/material/Table';
import { memo } from 'react';
import {
  CircularProgress,
  MenuItem,
  Pagination,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import CommonSelect from '../CommonSelect';
import { CommonTablePaginationWrapper, StyledTable } from './style';

interface Props {
  HistoryHead?: any;
  children: any;
  page?: number;
  setPage?: any;
  rowsPerPage?: number;
  totalCount?: number;
  setRowsPerPage?: any;
  loading?: boolean;
}

const ROWS_PER_PAGE_OPTIONS = [5, 10, 20];

const CommonTable = memo((props: Props) => {
  const {
    HistoryHead,
    children,
    page,
    setPage,
    rowsPerPage = 10,
    totalCount = 0,
    setRowsPerPage,
    loading,
  } = props;

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (page: number) => {
    setRowsPerPage(page);
    setPage(1);
  };

  const _count =
    totalCount % rowsPerPage === 0
      ? Math.floor(totalCount / rowsPerPage)
      : Math.floor(totalCount / rowsPerPage) + 1;

  const tableLoading = loading;

  return (
    <StyledTable>
      <Table>
        {HistoryHead && <HistoryHead />}

        {!tableLoading && children}

        {tableLoading && (
          <TableBody>
            <TableRow>
              <TableCell colSpan={7} align="center">
                <CircularProgress />
              </TableCell>
            </TableRow>
          </TableBody>
        )}
      </Table>
      {/* //Pagination */}
      {page !== undefined && page >= 0 && totalCount > 0 && !tableLoading && (
        <CommonTablePaginationWrapper>
          <div className="left-side">
            <div>Showing </div>
            <CommonSelect
              className="page-size"
              value={rowsPerPage.toString()}
              onChange={(page: string) =>
                handleChangeRowsPerPage(parseInt(page, 10))
              }
            >
              {ROWS_PER_PAGE_OPTIONS.map((x, index) => (
                <MenuItem key={`level_${index + 1}`} value={x.toString()}>
                  {x}
                </MenuItem>
              ))}
            </CommonSelect>
            <span>results per page</span>
          </div>

          <div className="right-side">
            <Pagination
              count={_count}
              page={page}
              siblingCount={0}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={handleChangePage}
            />
          </div>
        </CommonTablePaginationWrapper>
      )}
    </StyledTable>
  );
});

export default CommonTable;
