import Select from 'react-select';
import * as SC from './SelectOption.styled';

export const SelectOption = ({
  title,
  options,
  value,
  setFrom,
  placeholderOption,
}) => {
  return (
    <SC.Wrapper>
      <SC.SelectTitle>{title}</SC.SelectTitle>
      <Select
        options={options}
        onChange={e => {
          setFrom(e.label);
        }}
        value={{ value: value, label: value }}
        placeholder={placeholderOption}
      />
    </SC.Wrapper>
  );
};
