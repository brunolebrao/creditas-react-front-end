import styled from "styled-components";
import { colors } from "../../assets/styles/colors";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px;
  label {
    font-weight: 500;
    color: ${colors.doveGray};
  }
`;
