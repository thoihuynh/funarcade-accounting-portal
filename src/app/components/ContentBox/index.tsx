import { Dispatch, SetStateAction } from 'react';
import CloseIcon from '../icons/CloseIcon';
import SelectCurrency from '../SelectCurrency';
import { BoxWrap } from './style';

interface Props {
  title?: any;
  children?: any;
  onClose?: any;
  padding?: string;
  className?: string;
  draggable?: boolean;
  noHeader?: boolean;
  secondHeader?: boolean;
  currencyId?: number;
  setCurrencyId?: Dispatch<SetStateAction<number | undefined>>;
}

const ContentBox = (props: Props) => {
  const {
    onClose,
    padding,
    children,
    title,
    className = '',
    draggable,
    noHeader,
    secondHeader,
    currencyId,
    setCurrencyId,
  } = props;

  return (
    <BoxWrap className={`box-wrap ${className}`}>
      {onClose && (
        <div className="close-btn" onClick={onClose}>
          <CloseIcon />
        </div>
      )}
      {!noHeader && (
        <div
          className={`box-header ${secondHeader ? 'second_header' : ''}`}
          id="draggable-area"
          style={{ cursor: draggable ? 'move' : 'unset' }}
        >
          <div className="title">{title}</div>
          {setCurrencyId && (
            <SelectCurrency
              currencyId={currencyId || 0}
              setCurrencyId={setCurrencyId}
            />
          )}
        </div>
      )}
      <div className="box-content" style={{ padding: padding || 24 }}>
        {children}
      </div>
    </BoxWrap>
  );
};

export default ContentBox;
