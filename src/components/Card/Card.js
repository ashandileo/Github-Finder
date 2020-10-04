import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`${className || ''} tw-border tw-py-4 tw-px-4 tw-flex tw-flex-col tw-items-center tw-bg-transparent hover:tw-bg-gray-300 tw-rounded`}>
      {children}
    </div>
  )
}

export default Card;