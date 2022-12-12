import ContentBox from 'app/components/ContentBox';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import verifiedIcon from 'app/images/icons/verified-icon.svg';
import CommonButton from 'app/components/common/CommonButton';
import CommonHr from 'app/components/common/CommonHr';
import CommonSwitch from 'app/components/common/CommonSwitch';
import CommonDialog from 'app/components/common/CommonDialog';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContentPopup, Wrapper } from './style';
import { POPUP_SMALL_WIDTH } from 'utils/constants';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { messages as homeMessages } from 'app/pages/HomePage/messages';
import ReactHookFormInputField from 'app/components/ReactHookFormInputField';
import { ButtonGroupWrapper } from 'app/components/Header/style';

enum POPUP_TYPE {
  ADD_EMAIL = 'add_email',
  ADD_USERNAME = 'add_username',
  CHANGE_PASSWORD = 'change_password',
}

const VALIDATION_USERNAME = Yup.object().shape({
  username: Yup.string().required('Username is required'),
});

const VALIDATION_EMAIL = Yup.object().shape({
  email: Yup.string().email('Email is invalid').required('Email is required'),
});

const VALIDATION_PASSWORD = Yup.object().shape({
  currentPassword: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  newPassword: Yup.string()
    .required('New password is required')
    .oneOf([Yup.ref('currentPassword'), null], 'New password does not match'),
});

const SettingsPage = () => {
  const { t } = useTranslation();

  const [popupType, setPopupType] = useState('');
  const [popupOpen, setPopupOpen] = useState(false);
  const [openLinkDialog, setOpenLinkDialog] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [isConfirmLinkOrUnlink, setIsConfirmLinkOrUnlink] = useState(false);
  const [validationObj, setValidationObj] = useState<any>({});
  const [walletAddressLogin] = useState('');


  const title = t(...messages.settings());

  const showPopup = (type: string) => {
    if (type === POPUP_TYPE.ADD_EMAIL) {
      setValidationObj(VALIDATION_EMAIL);
    } else if (type === POPUP_TYPE.ADD_USERNAME) {
      setValidationObj(VALIDATION_USERNAME);
    } else if (type === POPUP_TYPE.CHANGE_PASSWORD) {
      setValidationObj(VALIDATION_PASSWORD);
    }
    setPopupType(type);
    setPopupOpen(true);
  };

  const onPopupClose = () => {
    reset();
    setPopupOpen(false);
  };

  const onPopupExited = () => {
    setPopupType('');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationObj),
  });

  const onSubmit = data => {
  };

  const updateSetting = () => {
  };

  const handleOnClickWallet = (provider: string) => {
    setIsConfirmLinkOrUnlink(true);
    setOpenLinkDialog(false);
  };

  const onClickConfirmUnlink = () => {
    setIsConfirmLinkOrUnlink(true);
    setOpenLinkDialog(false);
  };

  const toggleLinkOrUnlinkWalletAddress = () => {
    setIsLink(!isLink);
    setOpenLinkDialog(true);
    setIsConfirmLinkOrUnlink(false);
  };

  const onCloseLinkDialog = () => {
    if (!isConfirmLinkOrUnlink) {
      setIsLink(!isLink);
    }
    setOpenLinkDialog(false);
  };

  const renderTitle = () => {
    return popupType === POPUP_TYPE.ADD_EMAIL
      ? t(...messages.addEmail())
      : POPUP_TYPE.ADD_USERNAME
        ? t(...messages.addUserName())
        : t(...messages.addPassword());
  };

  return (
    <Wrapper className="setting-page">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Helmet>

      <ContentBox title={t(...messages.profileAndSecurity())} padding="0px">
        <CommonHr />
        <div className="footer">
          <CommonButton
            width={160}
            text={t(...messages.submit())}
            onClick={updateSetting}
          />
        </div>
      </ContentBox>

      {popupOpen && (
        <CommonDialog
          onClose={onPopupClose}
          onExited={onPopupExited}
          open={popupOpen}
          headerTitle={renderTitle()}
          width={POPUP_SMALL_WIDTH}
        >
          <ContentPopup>
            <form onSubmit={handleSubmit(onSubmit)}>
              {popupType === POPUP_TYPE.CHANGE_PASSWORD && (
                <>
                  <ReactHookFormInputField
                    type={'password'}
                    label={t(...messages.currentPassword())}
                    error={errors.currentPassword}
                    placeholder={`${t(...homeMessages.inputYour())} ${t(
                      ...messages.currentPassword(),
                    )}`}
                    errorMessage={errors.currentPassword?.message}
                    rest={{ ...register('currentPassword') }}
                  />

                  <ReactHookFormInputField
                    type={'password'}
                    label={t(...messages.newPassword())}
                    error={errors.newPassword}
                    placeholder={`${t(...homeMessages.inputYour())} ${t(
                      ...messages.newPassword(),
                    )}`}
                    errorMessage={errors.newPassword?.message}
                    rest={{ ...register('newPassword') }}
                  />
                </>
              )}
              {popupType === POPUP_TYPE.ADD_EMAIL && (
                <ReactHookFormInputField
                  type={'email'}
                  label={t(...messages.email())}
                  error={errors.email}
                  placeholder={`${t(...homeMessages.inputYour())} ${t(
                    ...messages.email(),
                  )}`}
                  errorMessage={errors.email?.message}
                  rest={{ ...register('email') }}
                />
              )}
              {popupType === POPUP_TYPE.ADD_USERNAME && (
                <ReactHookFormInputField
                  type={'text'}
                  label={t(...messages.userName())}
                  error={errors.username}
                  placeholder={`${t(...homeMessages.inputYour())} ${t(
                    ...messages.userName(),
                  )}`}
                  errorMessage={errors.username?.message}
                  rest={{ ...register('username') }}
                />
              )}

              <div className="buttons">
                <CommonButton
                  width={160}
                  text={t(...messages.cancel())}
                  background="#102A51"
                  onClick={onPopupClose}
                />
                <button type="submit" className="custom-btn-submit">
                  {t(...messages.confirm())}
                </button>
              </div>
            </form>
          </ContentPopup>
        </CommonDialog>
      )}
    </Wrapper>
  );
};

export default SettingsPage;
