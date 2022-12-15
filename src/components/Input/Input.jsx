import * as SC from './Input.styled';

export const InputField = ({ setInput }) => {
  return (
    <div>
      <SC.InputTitle>Amount</SC.InputTitle>
      <SC.Input
        type="text"
        placeholder="Enter the amount"
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
};
