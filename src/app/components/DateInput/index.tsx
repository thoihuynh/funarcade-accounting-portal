import { ChangeEventHandler } from 'react';
import { dateInputFormat } from 'utils/utilFunction';
import { Wrapper } from './style';

interface Props {
  label?: string;
  value: string;
  onChange: (date: string) => void;
}

export default function DateInput(props: Props) {
  const { label, value, onChange } = props;

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = e => {
    try {
      onChange(new Date(e.target.value).toISOString());
    } catch (error) {
      onChange(new Date().toISOString());
    }
  };

  return (
    <Wrapper
      className="date_input"
      type="date"
      label={label}
      value={dateInputFormat(value ? new Date(value) : new Date())}
      onChange={onChangeInput}
    />
  );
}
