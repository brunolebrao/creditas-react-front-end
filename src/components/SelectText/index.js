import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

/** STYLES */
import { Container } from './styles';

export const SelectText = ({ field, form: { setFieldValue, setFieldTouched }, ...props }) => {
  const {
    id, label, options, placeholder,
  } = props;
  const { name } = field;
  return (
    <Container>
      <label htmlFor={id}>{label}</label>
      <Dropdown
        id={id}
        placeholder={placeholder}
        options={options}
        search
        selection
        {...field}
        onChange={(e, { value }) => setFieldValue([name], value)}
        onBlur={() => setFieldTouched([name], true, true)}
      />
    </Container>
  );
};

SelectText.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string,
};
