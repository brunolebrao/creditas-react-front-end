import React from 'react';

/** STYLES */
import { Container, Quota, Amount } from './styles';

export const InstallmentValue = () => (
  <Container>
    <h4>Valor da Parcela</h4>
    <Quota>
      <strong>R$</strong>
      <span>465,00</span>
    </Quota>
    <Amount>
      <h4>Total a pagar</h4>
      <p>R$ 11.112,00</p>
    </Amount>
    <Amount>
      <h4>Taxa de juros (mês)</h4>
      <p>111,12%</p>
    </Amount>
    <button type="submit">Solicitar</button>
  </Container>
);
