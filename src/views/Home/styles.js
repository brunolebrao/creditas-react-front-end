import styled from 'styled-components';
import { colors } from '../../assets/styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100% - 80px);
  padding: 0 10px;
`;
export const Title = styled.h1`
  color: ${colors.doveGray};
  margin-bottom: 50px;
  max-width: 600px;
  line-height: 34px;
  text-align: center;
`;
export const BoxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
`;
export const BoxBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  div:first-child {
    padding: 0 10px;
  }
`;
export const BoxSpace = styled.div`
  padding: 10px;
`;

export const BoxCenter = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
`;
