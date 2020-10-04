import React from 'react';
import Left from './Left';
import Right from './Right';

const UserDetailCard = ({ userDetail }) => {
  return (
    <div className="tw-border tw-py-4 tw-rounded tw-px-4 tw-grid lg:tw-grid-cols-2 md:tw-grid-cols-1 sm:tw-grid-cols-1 tw-mt-3 tw-items-center">
      <Left userDetail={userDetail}/>
      <Right userDetail={userDetail}/>
    </div>
  )
}

export default UserDetailCard;