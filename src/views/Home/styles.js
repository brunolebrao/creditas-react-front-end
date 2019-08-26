import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  height: calc(100% - 80px);
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;
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
    flex-direction: column;
    padding: 15px;
    section {
      display: flex;
      justify-content: center;
    }
  }
`;

export const Box = styled.form`
  height: 240px;
`;
