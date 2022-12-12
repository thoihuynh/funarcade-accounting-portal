import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { Wrapper } from './style';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <h1>{t(...messages.header())}</h1>
    </Wrapper>
  );
}
