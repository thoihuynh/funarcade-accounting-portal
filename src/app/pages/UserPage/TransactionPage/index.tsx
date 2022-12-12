import { MenuItem } from '@mui/material';
import CommonButton from 'app/components/common/CommonButton';
import CommonField from 'app/components/common/CommonField';
import CommonHr from 'app/components/common/CommonHr';
import CommonSelect from 'app/components/common/CommonSelect';
import CommonTable from 'app/components/common/CommonTable';
import ContentBox from 'app/components/ContentBox';
import DateInput from 'app/components/DateInput';
import SearchIcon from 'app/components/icons/SearchIcon';
import { setToast, setUserTransaction } from 'app/redux/actions';
import { getUserTransactionApi } from 'app/redux/apis';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { dateInputFormat } from 'utils/utilFunction';
import TableTransactionBody from './components/TableTransactionBody';
import TableTransactionHead from './components/TableTransactionHead';
import { messages } from './messages';
import { Wrapper } from './style';

const TRANSACTION_OPTIONS = [
  {
    key: 'deposit',
    value: 'Deposit',
  },
  {
    key: 'withdraw',
    value: 'Withdrawal',
  },
];
const TransactionPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [fromDate, setDateFrom] = useState(
    new Date(new Date().setDate(new Date().getDate() - 30)).toISOString(),
  );
  const [toDate, setDateTo] = useState(new Date().toISOString());
  const [type, setType] = useState('all');
  const [hash, setHash] = useState('');

  const onClickSearch = () => {
    getTransaction();
  };

  const dateFromChange = (date: string) => {
    setDateFrom(date);
  };

  const dateToChange = (date: string) => {
    setDateTo(date);
  };

  const handleTransactionTypeChange = (type: string) => {
    setType(type);
  };

  const handleHashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHash(e.target.value);
  };

  const getTransaction = async () => {
    // format type
    const formattedType = type === 'all' ? '' : type;
    try {
      setLoading(true);
      const res = await getUserTransactionApi(
        formattedType,
        fromDate,
        toDate,
        hash,
        page,
        rowsPerPage,
      );
      setTotalCount(+res.totalCount);
      dispatch(setUserTransaction(res.data));
      setLoading(false);
    } catch (err: any) {
      setLoading(false);
      dispatch(
        setToast({
          msg: typeof err === 'string' ? err : err.message,
          type: 'error',
        }),
      );
    }
  };

  return (
    <Wrapper>
      <Helmet>
        <title>{t(...messages.transaction())}</title>
        <meta name="description" content="Transaction" />
      </Helmet>
      <ContentBox title="Transaction" padding="0">
        <CommonHr marginBottom={0} color="#58708C" />
        <>
          <div className="search_box">
            <div className="filters">
              <CommonSelect
                className="transaction-type"
                value={type}
                onChange={(value: string) =>
                  handleTransactionTypeChange(value)
                }
                label="Transaction Type"
              >
                <MenuItem key="all" value="all">
                  All
                </MenuItem>
                {TRANSACTION_OPTIONS.map(x => (
                  <MenuItem key={x.key} value={x.key}>
                    {x.value}
                  </MenuItem>
                ))}
              </CommonSelect>

              <DateInput
                label="From"
                value={dateInputFormat(new Date(fromDate))}
                onChange={dateFromChange}
              />
              <DateInput
                label="To"
                value={dateInputFormat(new Date(toDate))}
                onChange={dateToChange}
              />
              <CommonField
                name="hash"
                className="search_input"
                type="text"
                leftTextOrIcon={<SearchIcon />}
                value={hash}
                placeholder=""
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleHashChange(e)
                }
              />
            </div>
            <CommonButton
              className="search_btn"
              text="Search"
              width={100}
              onClick={onClickSearch}
            />
          </div>

          <div className="table_transaction_wrap">
            <CommonTable
              totalCount={totalCount}
              page={page}
              setPage={setPage}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              loading={loading}
            >
              <TableTransactionHead />
              <TableTransactionBody />
            </CommonTable>
          </div>
        </>
      </ContentBox>
    </Wrapper>
  );
};

export default TransactionPage;
