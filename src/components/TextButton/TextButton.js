import React from 'react';
import PropTypes from 'prop-types';

const interfaces = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.string
  ]),
  onClick: PropTypes.func,
  className: PropTypes.string
}

const defaultValue = {
  children: 'Text Button',
  onClick: () => {},
  className: ''
}

const TextButton = ({ children, onClick, className }) => (
  <button
    onClick={e => {e.stopPropagation(); onClick()}}
    className={`${className} tw-text-blue-600 focus:tw-outline-none`}>
      {children}
  </button>
)

TextButton.propTypes = interfaces;
TextButton.defaultProps = defaultValue;

export default TextButton;