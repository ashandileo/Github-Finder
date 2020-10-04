import React from 'react';
import PropTypes from 'prop-types';

const interfaces = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.string
  ]),
  containerClass: PropTypes.string,
  badgeClassColor: PropTypes.string
}

const defaultValue = {
  children: 'Badge Text',
  containerClass: '',
  badgeClassColor: 'tw-bg-green-400'
}

const Badge = props => {
  const {
    children,
    containerClass,
    badgeClassColor
  } = props;

  return (
    <div className={`${containerClass} tw-cursor-default tw-whitespace-no-wrap`}>
      <p className={`${badgeClassColor} tw-inline-block tw-py-1 tw-px-2 tw-text-xs tw-text-white tw-font-medium tw-rounded-md`}>
        {children}
      </p>
    </div>
  )
}

Badge.propTypes = interfaces;
Badge.defaultProps = defaultValue;

export default Badge;