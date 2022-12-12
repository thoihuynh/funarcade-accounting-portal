import { Wrapper } from './style';

interface Props {
  text: string;
  borderColor?: string;
  space?: number;
}

export default function TextMiddleLine({
  text,
  borderColor = '#58708C',
  space = 24,
}: Props) {
  return (
    <Wrapper $borderColor={borderColor} $space={space}>
      <span>{text}</span>
    </Wrapper>
  );
}
