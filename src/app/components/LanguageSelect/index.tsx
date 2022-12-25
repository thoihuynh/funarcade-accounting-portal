import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { checkDefaultLang } from '../../../utils/utilFunction';
import { Tooltip } from '@mui/material';
import { LanguageWrap, ListLangWrap } from './style';
import { LIST_LANGUAGE } from 'utils/constants';

interface Props {
  showText?: boolean;
  isGameChat?: boolean;
  rightTextOrIcon?: JSX.Element | string;
}

export function LanguageSelect(props: Props) {
  const { showText, isGameChat, rightTextOrIcon } = props;
  const { i18n } = useTranslation();
  const [value, setValue] = useState(checkDefaultLang(i18n.language));
  const [elLang, setElLang] = useState<null | HTMLElement>(null);

  const setLang = value => {
    setElLang(null);
    if (isGameChat) return;

    setValue(value);
    i18n.changeLanguage(value);
  };

  return (
    <>
      <Tooltip title="language">
        <LanguageWrap
          className="select-language d-flex"
          onClick={e => setElLang(e.currentTarget)}
        >
          <div className="lang-wrapper">
            <div className="icon">
              {value?.toLocaleUpperCase().substring(0, 2)}
            </div>
            {showText && <div className="text">Language</div>}
          </div>

          {rightTextOrIcon && <>{rightTextOrIcon}</>}
        </LanguageWrap>
      </Tooltip>

      <ListLangWrap
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        style={{ zIndex: 1401 }}
        id="customized-menu"
        anchorEl={elLang}
        open={Boolean(elLang)}
        onClose={() => setElLang(null)}
      >
        <ul>
          {LIST_LANGUAGE.map(x => (
            <li key={x.value} onClick={() => setLang(x.value)}>
              {x.name}
            </li>
          ))}
        </ul>
      </ListLangWrap>
    </>
  );
}

export default LanguageSelect;
