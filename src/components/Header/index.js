import React from 'react';
import logo from '../../assets/images/logo.svg';

/** STYLES */
import { Container } from './styles';

/** TEXTS */
import { texts } from '../../assets/texts';

const Header = () => (
  <Container>
    <img src={logo} alt="Credita" />
    <button type="button">{texts.help}</button>
  </Container>
);

export default Header;
