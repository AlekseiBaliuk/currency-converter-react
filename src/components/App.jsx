import { useState, useEffect } from 'react';
import { Header } from './Header/Header';
import { Result } from './Result/Result';
import { Switcher } from './Switcher/Switcher';
import { InputField } from './Input/Input';
import { SelectOption } from './Select/SelectOption';
import * as SC from './App.styled';
import axios from 'axios';

export const App = () => {
  const [info, setInfo] = useState([]);
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState('UAH');
  const [to, setTo] = useState('USD');
  const [usdRate, setUsdRate] = useState(null);
  const [eurRate, setEurRate] = useState(null);
  const [options, setOptions] = useState([]);
  const [output, setOutput] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCurrency = async () => {
      try {
        const response = await axios.get(
          'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
        );
        const data = response.data;

        setInfo([...data, { cc: 'UAH', rate: 1, txt: 'Українська гривня' }]);
      } catch (error) {
        setError(error);
      }
    };
    getCurrency();
  }, []);

  useEffect(() => {
    setOptions(
      info.map(option => {
        return {
          value: option.cc,
          label: option.cc,
        };
      })
    );
  }, [info]);

  useEffect(() => {
    if (info.length > 0) {
      function getUsdEurRate() {
        const USD_RATE = info.filter(info => info.cc === 'USD');
        setUsdRate(USD_RATE[0].rate.toFixed(2));
        const EUR_RATE = info.filter(info => info.cc === 'EUR');
        setEurRate(EUR_RATE[0].rate.toFixed(2));
      }
      getUsdEurRate();

      function convert() {
        const rateFrom = info.filter(info => info.cc === from);
        const rateTo = info.filter(info => info.cc === to);
        setOutput((input * rateFrom[0].rate) / rateTo[0].rate);
      }
      convert();
    }
  }, [from, info, input, to]);

  function flip() {
    const temp = from;
    setFrom(to);
    setTo(temp);
  }

  return (
    <SC.AppWrapper>
      <Header error={error} usdRate={usdRate} eurRate={eurRate} />

      <SC.Container>
        <InputField setInput={setInput} />

        <SelectOption
          title="From"
          options={options}
          value={from}
          setFrom={setFrom}
          placeholderOption="From"
        />

        <Switcher flip={flip} />

        <SelectOption
          title="To"
          options={options}
          value={to}
          setFrom={setTo}
          placeholderOption="To"
        />
      </SC.Container>
      <Result input={input} output={output} to={to} from={from} />
    </SC.AppWrapper>
  );
};
