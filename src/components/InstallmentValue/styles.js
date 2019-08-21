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
  height: 300px;
`;
