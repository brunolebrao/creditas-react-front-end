import React from 'react';
import PropTypes from 'prop-types';

/** STYLES */
import { Container } from './styles';

export default function Tittle({ text }) {
  return <Container>{text}</Container>;
}

Tittle.propTypes = {
  text: PropTypes.string.isRequired,
};
