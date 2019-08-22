import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Container = styled.div`
  background: ${colors.white};
  border-radius: 4px;
  box-shadow: 0px -5px 2px -1px ${colors.silver};
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-width: 35%;
  height: 240px;
  h4 {
    font-weight: 200;
    font-size: 18px;
    color: ${colors.boulder};
    text-align: center;
    margin-bottom: 3px;
  }
  button {
    background-color: ${colors.greenYellow};
    border: none;
    padding: 10px 0;
    width: 100%;
    color: ${colors.tomThumb};
    border-radius: 20px;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
  }
`;

export const Quota = styled.div`
  font-size: 21px;
  color: ${colors.doveGray};
  span {
    font-size: 28px;
    color: ${colors.mountainMeadow};
    font-weight: bold;
  }
`;

export const Amount = styled.div`
  h4 {
    color: ${colors.boulder};
    font-size: 0.7rem;
    text-align: center;
    margin-bottom: 3px;
  }
  p {
    font-size: 0.7rem;
    font-weight: 100;
    text-align: center;
  }
`;
