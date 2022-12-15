import * as SC from './Switcher.styled';
import { HiSwitchHorizontal } from 'react-icons/hi';

export const Switcher = ({ flip }) => {
  return (
    <SC.Wrapper>
      <HiSwitchHorizontal size="30px" onClick={() => flip()} />
    </SC.Wrapper>
  );
};
