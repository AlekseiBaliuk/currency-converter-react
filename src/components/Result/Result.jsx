import * as SC from './Result.styled';

export const Result = ({ input, from, to, output }) => {
  return (
    <SC.Wrapper>
      <h2>Converted Amount:</h2>
      <SC.Output>
        {input + ' ' + from + ' = ' + output.toFixed(2) + ' ' + to}
      </SC.Output>
    </SC.Wrapper>
  );
};
