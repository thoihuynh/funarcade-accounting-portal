import { useState } from 'react';
import EyeHidden from '../icons/EyeHidden';
import EyeVisible from '../icons/EyeVisible';
import { Wrapper } from './style';

interface Props {
  name?: string;
  className?: string;
  label?: string;

  value?: string | number;
  type: 'text' | 'number' | 'date' | 'password' | 'email';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: {};
  errorMessage?: string;
  placeholder?: string;
  rightTextOrIcon?: string;
  rest: {};
}
const ReactHookFormInputField = (props: Props) => {
  const {
    type,
    name,
    label,
    error,
    placeholder,
    errorMessage,
    rightTextOrIcon,
    onChange,
    rest,
  } = props;
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <Wrapper>
      <div className="input_wrap">
        <label>{label}</label>
        <input
          type={
            type !== 'password' ? type : passwordShown ? 'text' : 'password'
          }
          name={name}
          className={`form-input ${error ? 'is-invalid' : ''}`}
          placeholder={placeholder}
          onChange={onChange}
          {...rest}
        />
        {type === 'password' && (
          <div
            className="view-password"
            onClick={() => setPasswordShown(!passwordShown)}
          >
            {passwordShown ? <EyeVisible /> : <EyeHidden />}
          </div>
        )}

        {type !== 'password' && rightTextOrIcon && (
          <div className="right-text-or-icon">{rightTextOrIcon}</div>
        )}

        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </Wrapper>
  );
};

export default ReactHookFormInputField;
