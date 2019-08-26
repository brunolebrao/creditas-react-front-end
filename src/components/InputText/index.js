import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

/** STYLES */
import { Container } from './styles';

export const InputText = ({ field, form, ...props }) => {
  const { id, label, type } = props;
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Input id={id} type={type} {...field} />
    </Container>
  );
};

InputText.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  type: PropTypes.string.isRequired,
};
