import { TableHead, TableRow, TableCell } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { messages } from '../messages';

const TableTransactionHead = () => {
  const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        <TableCell>No.</TableCell>
        <TableCell align="center">{t(...messages.transactionHash())}</TableCell>
        <TableCell align="center" className="hideOnMobile">
          {t(...messages.dateAndTime())}
        </TableCell>
        <TableCell align="center">{t(...messages.action())}</TableCell>
        <TableCell align="center">{t(...messages.amount())}</TableCell>
        <TableCell align="center" className="hideOnMobile">
          {t(...messages.currency())}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableTransactionHead;
