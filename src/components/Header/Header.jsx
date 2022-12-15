import * as SC from './Header.styled';

export const Header = ({ error, usdRate, eurRate }) => {
  return (
    <header>
      {error && <p>sorry, something wrong, try again...</p>}
      <SC.Wrapper>
        <h1>Currency converter</h1>
        <SC.CurrencyWrapper>
          <SC.CurrencyRate>1 USD = {usdRate}</SC.CurrencyRate>
          <SC.CurrencyRate>1 EUR = {eurRate}</SC.CurrencyRate>
        </SC.CurrencyWrapper>
      </SC.Wrapper>
    </header>
  );
};
