import React from 'react';
import RepoCard from './RepoCard';

const Repos = ({ userRepos }) => {
  console.log("Repos -> userRepos", userRepos)
  return (
    <div className="tw-mt-4">
      <h2 className="tw-text-2xl tw-font-medium">Latest Repos</h2>
      {userRepos.length > 0 ? userRepos?.map(repo => (
        <RepoCard
          name={repo.name}
          description={repo.description}
          language={repo.language}
          forksCount={repo.forks}
          watchersCount={repo.watchers}
          starsCount={repo.stargazersCount}
          repoUrl={repo.htmlUrl}
        />
      )) : <span>-</span>}
    </div>
  )
}

export default Repos;