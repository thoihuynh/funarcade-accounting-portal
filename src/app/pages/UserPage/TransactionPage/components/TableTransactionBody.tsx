import { TableRow, TableCell, TableBody } from '@mui/material';
import { TransactionSource } from 'app/appTypes';
import { selectUserTransaction } from 'app/redux/selectors';
import { useSelector } from 'react-redux';
import { TRANSACTION_POLYGON_URL } from 'utils/constants';
import {
  timeStrFormat,
  dateStrFormat,
  formatFirstCharacterUppercase,
} from 'utils/utilFunction';

const TableTransactionBody = () => {
  const userTransaction = useSelector(selectUserTransaction);
  // const userWallets = useSelector(selectUserWallets);

  const renderCurrency = (walletId: string) => {
    // const userWallet = userWallets.find(x => x.walletObj.id === walletId);
    // return userWallet ? userWallet.currencyObj.shortname : 'N/A';
  };

  const viewDetailTransaction = (hash: string) => {
    if (hash) window.open(`${TRANSACTION_POLYGON_URL}/tx/${hash}`, '_blank');
  };

  return (
    <>
      <TableBody>
        {[...userTransaction].map((x, index) => {
          let transactionSource: TransactionSource = {
            transactionHash: '',
          };
          if (x.source.includes('transactionHash')) {
            transactionSource = JSON.parse(x.source.replace(/^\s+|\s+$/g, ''));
          }
          return (
            <TableRow key={index}>
              <TableCell>{index + 1}</TableCell>
              <TableCell
                className="click-cell"
                onClick={() =>
                  viewDetailTransaction(transactionSource?.transactionHash)
                }
              >
                {transactionSource?.transactionHash}
              </TableCell>
              <TableCell align="center" className="hideOnMobile">
                {x.createdAt && dateStrFormat(x.createdAt)} <br></br>
                {x.createdAt && timeStrFormat(x.createdAt)}
              </TableCell>
              <TableCell align="center">
                {formatFirstCharacterUppercase(x.type)}
              </TableCell>
              <TableCell align="center">{x.amount}</TableCell>
              <TableCell align="center" className="hideOnMobile">
                {/* {renderCurrency(x.walletId)} */}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </>
  );
};

export default TableTransactionBody;
