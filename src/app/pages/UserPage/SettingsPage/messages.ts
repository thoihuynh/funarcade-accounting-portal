import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const scope = translations.pages.UserPage.SettingsPage;

export const messages = {
  profile: () => _t(scope.profile, 'Profile'),
  profileDes: () =>
    _t(
      scope.profileDes,
      `To serve you better we ask that you provide identifying documents.
  This will secure your account in cases of account recovery. It
  also helps make sure you receive your gifts or physical rewards
  to the correct location.`,
    ),
  security: () => _t(scope.security, 'Security'),
  securityDes: () => _t(scope.securityDes, 'Input your new password to reset.'),
  settings: () => _t(scope.settings, 'Settings'),
  firstName: () => _t(scope.firstName, 'First name'),
  userName: () => _t(scope.userName, 'User name'),
  lastName: () => _t(scope.lastName, 'Last name'),
  email: () => _t(scope.email, 'Email'),
  phoneNumber: () => _t(scope.phoneNumber, 'Phone number'),
  submit: () => _t(scope.submit, 'Submit'),
  oldPassword: () => _t(scope.oldPassword, 'Old Password'),
  newPassword: () => _t(scope.newPassword, 'New Password'),
  confirmNewPassword: () =>
    _t(scope.confirmNewPassword, 'Confirm New Password'),
  enable2FA: () => _t(scope.enable2FA, 'Enable 2FA'),
  password: () => _t(scope.password, 'Password'),
  profileAndSecurity: () => _t(scope.profileAndSecurity, 'Profile & Security'),
  addUserName: () => _t(scope.addUserName, 'Add User Name'),
  changeEmail: () => _t(scope.changeEmail, 'Change Email'),
  addEmail: () => _t(scope.addEmail, 'Add Email'),
  addPassword: () => _t(scope.addPassword, 'Add Password'),
  cancel: () => _t(scope.cancel, 'Cancel'),
  confirm: () => _t(scope.confirm, 'Confirm'),
  currentPassword: () => _t(scope.currentPassword, 'Current Password'),
  recommendText: () =>
    _t(
      scope.recommendText,
      'We recommend you to add an email address, for added security through 2FA.',
    ),
  enable2FAForLoginUsername: () =>
    _t(scope.enable2FAForLoginUsername, 'Enable 2FA for log in with username'),
  enable2FAForEmailChange: () =>
    _t(scope.enable2FAForEmailChange, 'Enable 2FA for email change'),
  enable2FAForPasswordChange: () =>
    _t(scope.enable2FAForPasswordChange, 'Enable 2FA for password change'),
  enable2FAForWithdrawal: () =>
    _t(scope.enable2FAForWithdrawal, 'Enable 2FA for withdrawal'),
  enable2FAForLinkingOrUnlinkWallet: () =>
    _t(
      scope.enable2FAForLinkingOrUnlinkWallet,
      'Enable 2FA for linking / unlinking wallet',
    ),
  enablePasswordCheckForEmailChange: () =>
    _t(
      scope.enablePasswordCheckForEmailChange,
      'Enable password check for email change',
    ),
  enablePasswordCheckForLinkOrUnLinkDesignatedWallet: () =>
    _t(
      scope.enablePasswordCheckForLinkOrUnLinkDesignatedWallet,
      'Enable password check for linking / unlinking designated wallet',
    ),
  enablePasswordCheckForWithdrawals: () =>
    _t(
      scope.enablePasswordCheckForWithdrawals,
      'Enable password check for withdrawals',
    ),
  linkOrUnlinkWallet: () =>
    _t(scope.linkOrUnlinkWallet, 'Link / Unlink My Wallet'),
  linkWalletForLogin: () =>
    _t(scope.linkWalletForLogin, 'Link a designated wallet for Login'),
  walletAddress: () => _t(scope.walletAddress, 'Wallet Address'),
};
