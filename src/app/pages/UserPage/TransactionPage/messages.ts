import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const scope = translations.pages.UserPage.TransactionPage;

export const messages = {
  balance: () => _t(scope.balance, 'Balance'),
  dateAndTime: () => _t(scope.dateAndTime, 'Date & Time'),
  action: () => _t(scope.action, 'Action'),
  amount: () => _t(scope.amount, 'Amount'),
  currency: () => _t(scope.currency, 'Currency'),
  transaction: () => _t(scope.transaction, 'Transaction'),
  transactionHash: () => _t(scope.transactionHash, 'Transaction Hash'),
};
