import React from 'react';
import PropTypes from 'prop-types';

/** STYLES */
import { Container, Box } from './styles';

export const InputRange = ({ field, form: { setFieldValue }, ...props }) => {
  const { min, max, step } = props;
  const { name } = field;

  return (
    <Container>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        {...field}
        onChange={(e) => setFieldValue([name], e.target.value)}
      />
      <Box>
        <div>{min}</div>
        <div>{max}</div>
      </Box>
    </Container>
  );
};

InputRange.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  id: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
};
