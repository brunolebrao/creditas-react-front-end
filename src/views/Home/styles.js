import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Container = styled.div`
  margin-top: 50px;
  height: calc(100% - 80px);
  header {
    h1 {
      color: ${colors.doveGray};
      margin-bottom: 50px;
      max-width: 600px;
      line-height: 34px;
      text-align: center;
      font-size: 2.2em;
    }
  }
  main {
    display: flex;
    justify-content: space-between;
  }
`;

export const Box = styled.form`
  height: 240px;
`;
