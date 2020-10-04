import React from 'react';
import moment from 'moment';

const Right = ({ userDetail }) => {
  const {
    bio,
    location,
    company,
    createdAt,
    blog
  } = userDetail;

  return (
    <div className="right tw-rounded tw-border tw-border-gray-300 sm:tw-mt-4 md:tw-mt-4 lg:tw-mt-0" style={{height: 'max-content'}}>
      <ul>
        <li className="tw-border-solid tw-border-b tw-border-0 tw-border-gray-300 tw-py-2 tw-px-4">
          <span className="tw-font-medium">Bio : </span>{bio || '-'}
        </li>
        <li className="tw-border-solid tw-border-b tw-border-0 tw-border-gray-300 tw-py-2 tw-px-4">
          <span className="tw-font-medium">Location : </span>{location || '-'}
        </li>
        <li className="tw-border-solid tw-border-b tw-border-0 tw-border-gray-300 tw-py-2 tw-px-4">
          <span className="tw-font-medium">Company : </span>{company || '-'}
        </li>
        <li className="tw-border-solid tw-border-b tw-border-0 tw-border-gray-300 tw-py-2 tw-px-4">
          <span className="tw-font-medium">Member Since : </span>{moment(createdAt).format('dddd, DD MMMM YYYY')}
        </li>
        <li className="tw-py-2 tw-px-4">
          <span className="tw-font-medium">Website : </span>
          {blog ? <a className="tw-text-blue-600" href={blog} target="_blank">{blog}</a> : '-'}
        </li>
      </ul>
    </div>
  )
}

export default Right;