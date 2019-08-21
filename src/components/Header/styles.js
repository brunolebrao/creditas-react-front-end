import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.mountainMeadow};
  padding: 20px 100px 20px 100px;
  img {
    width: 200px;
  }
  button {
    background: transparent;
    border: 0;
    color: ${colors.concrete};
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }
`;
