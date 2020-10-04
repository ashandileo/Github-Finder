import React from 'react';
import PropTypes from 'prop-types';

const interfaces = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  inputContainerClass: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

const defaultValue = {
  className: '',
  placeholder: 'Placeholder',
  inputContainerClass: '',
  onChange: () => {}
}

const Input = props => {
  const {
    className,
    placeholder,
    onChange,
    inputContainerClass
  } = props;

  return (
    <div className={inputContainerClass}>
      <input
        className={`${className} tw-border tw-py-2 tw-px-4 tw-rounded`}
        placeholder={placeholder}
        onChange={onChange} />
    </div>
  )
}

Input.propTypes = interfaces;
Input.defaultProps = defaultValue;

export default Input;