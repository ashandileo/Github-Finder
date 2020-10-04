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
  children: 'Button',
  onClick: () => {},
  className: ''
}

const Button = ({ children, onClick, className }) => (
  <button
    className={`${className} tw-bg-gray-700 hover:tw-bg-gray-500 tw-py-1 tw-px-2 tw-text-white tw-text-sm tw-rounded`}
    onClick={e => {e.stopPropagation(); onClick()}}>
    {children}
  </button>
)

Button.propTypes = interfaces;
Button.defaultProps = defaultValue;

export default Button;