import React from 'react';
import Card from '../../components/Card/Card';
import Badge from '../../components/Badge/Badge';

const RepoCard = ({ name, description, language, forksCount, watchersCount, starsCount, repoUrl }) => (
  <a href={repoUrl} target="_blank">
    <Card className="tw-mb-3">
      <div className="tw-flex tw-flex-col tw-justify-start tw-items-start lg:tw-flex-row lg:tw-justify-between lg:tw-items-center tw-w-full">
        <div className="tw-max-w-xl tw-mb-2">
          <p className="tw-text-lg tw-font-medium">{name}</p>
          <span className="tw-text-sm tw-font-light tw-text-gray-600 tw-my-2 tw-inline-block">{description}</span>
          {language ? (
            <Badge badgeClassColor="tw-bg-orange-500">
              {language}
            </Badge>
          ) : <p>-</p>}
        </div>
        <div className="tw-flex">
          <Badge
            containerClass="tw-mr-2"
            badgeClassColor="tw-bg-yellow-500"
          >
            Stars: {starsCount}
          </Badge>
          <Badge
            containerClass="tw-mr-2"
            badgeClassColor="tw-bg-pink-500"
          >
            Watchers: {watchersCount}
          </Badge>
          <Badge
            badgeClassColor="tw-bg-red-500"
          >
            Forks: {forksCount}
          </Badge>
        </div>
      </div>
    </Card>
  </a>
);

export default RepoCard;