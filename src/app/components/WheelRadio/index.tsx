import { useEffect } from 'react';
import { WheelRadioWrap } from './style';

interface Props {
  setChoice: any;
  disabled?: boolean;
}

const WheelRadio = (props: Props) => {
  const { setChoice, disabled } = props;

  const onChangeObserver = e => {
    const choice: number = +e.detail || 0;
    setChoice(choice);
  };

  useEffect(() => {
    window.addEventListener('wheel-radio-choice', onChangeObserver);
    const firstChoiceEl: any = document.getElementById('input0');
    if (firstChoiceEl) {
      firstChoiceEl.checked = true;
    }

    // Unmount
    return () => {
      window.removeEventListener('wheel-radio-choice', onChangeObserver);
    };
  }, []);

  return (
    <WheelRadioWrap className="wheel-radio" disabled={disabled}>
      <label htmlFor="input0" onClick={() => setChoice(0)}></label>
      <input id="input0" value={0} name="radioWheel" type="radio" />
      <label htmlFor="input1" onClick={() => setChoice(1)}></label>
      <input id="input1" name="radioWheel" value={1} type="radio" />
      <label htmlFor="input2" onClick={() => setChoice(2)}></label>
      <input id="input2" name="radioWheel" value={2} type="radio" />
      <label htmlFor="input3" onClick={() => setChoice(3)}></label>
      <input id="input3" name="radioWheel" value={3} type="radio" />
      <span id="slider"></span>

      <div className="bar-wrap">
        <div className="arrow"></div>
        <div className="bar"></div>
      </div>
    </WheelRadioWrap>
  );
};

export default WheelRadio;
