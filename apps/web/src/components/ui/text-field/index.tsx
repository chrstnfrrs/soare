import styled from '@emotion/styled';
import Input from '../input';
import Label from '../label';

type TextField = {
  id?: string;
  label?: string;
  name?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  type?: string;
  value?: string;
};

const TextFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TextField: React.FC<TextField> = ({
  name,
  label,
  id,
  onChange,
  onKeyDown,
  type = 'text',
  value,
}) => (
  <TextFieldContainer>
    <Label htmlFor={id ?? name}>{label}</Label>
    <Input
      id={id ?? name}
      name={name ?? id}
      onChange={onChange}
      onKeyDown={onKeyDown}
      tabIndex={0}
      type={type}
      value={value}
    />
  </TextFieldContainer>
);

export default TextField;
