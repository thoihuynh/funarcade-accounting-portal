import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { Wrapper } from './style';

interface Props {
  errorMsg: string;
}

const ErrorPage = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>{t(...messages.header())}</h1>
      <p>{props.errorMsg}</p>
    </Wrapper>
  );
};

export default ErrorPage;
