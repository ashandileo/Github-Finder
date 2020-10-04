import React from 'react';
import Button from './../Button/Button';
import Badge from './../Badge/Badge';

const Left = ({ userDetail }) => {
  const {
    avatarUrl,
    name,
    htmlUrl,
    following,
    followers,
    publicRepos,
    publicGists,
  } = userDetail;

  return (
    <div className="left tw-flex tw-flex-col tw-justify-center tw-items-center tw-mr-4">
      <img
        src={avatarUrl}
        className="tw-w-32 tw-h-32 tw-rounded-full" />
      <p className="tw-text-xl tw-font-medium tw-my-2">{name}</p>
      <Button
        onClick={() => window.open(htmlUrl, '_blank')}
        className="tw-bg-blue-600 hover:tw-bg-blue-500 tw-mb-3">
          View Profile
      </Button>
      <div className="tw-grid sm:tw-grid-cols-2 md:tw-grid-cols-4 lg:tw-grid-cols-4 tw-text-center">
        <Badge containerClass="tw-mb-2" badgeClassColor="tw-bg-gray-800">Public Repos: {publicRepos}</Badge>
        <Badge containerClass="tw-mb-2" badgeClassColor="tw-bg-gray-500">Public Gist: {publicGists}</Badge>
        <Badge containerClass="tw-mb-2" badgeClassColor="tw-bg-teal-500">Followers: {followers}</Badge>
        <Badge containerClass="tw-mb-2" badgeClassColor="tw-bg-yellow-800">Following: {following}</Badge>
      </div>
    </div>
  )
}

export default Left;