import { useSelector } from 'react-redux';
import CommonField from '../common/CommonField';

interface Props {
  value: number;
  className?: string;
  disabled?: boolean;
  label?: string;
  afterLabel?: string;
  name: string;
  onKeyPress: any;
  onChange: any;
}

const BetInput = (props: Props) => {
  const {
    value,
    className,
    disabled,
    label,
    afterLabel,
    name,
    onKeyPress,
    onChange,
  } = props;


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = +e.target.value;
    onChange(e);
  };

  return (
    <CommonField
      type="number"
      className={className}
      label={label}
      afterLabel={afterLabel}
      placeholder=""
      name={name}
      value={value || ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        handleAmountChange(e);
      }}
      onKeyPress={onKeyPress}
      disabled={disabled}
    />
  );
};

export default BetInput;
