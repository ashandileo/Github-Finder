import React from 'react';
import PropTypes from 'prop-types';

const interfaces = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  inputContainerClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  name: PropTypes.string
}

const defaultValue = {
  className: '',
  placeholder: 'Placeholder',
  inputContainerClass: '',
  onChange: () => {},
  id: '',
  name: ''
}

const Input = props => {
  const {
    className,
    placeholder,
    onChange,
    inputContainerClass,
    id,
    name
  } = props;

  return (
    <div className={inputContainerClass}>
      <input
        className={`${className} tw-border tw-py-2 tw-px-4 tw-rounded`}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        id={id}/>
    </div>
  )
}

Input.propTypes = interfaces;
Input.defaultProps = defaultValue;

export default Input;