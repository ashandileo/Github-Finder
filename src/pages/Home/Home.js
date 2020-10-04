import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Input from '../../components/Input/Input';
import Badge from '../../components/Badge/Badge';
import Card from '../../components/Card/Card';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';

import useDebounce from './../../hooks/useDebounce';
import { getUsersList } from '../../client/githubClient';

const Home = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const debounced = useDebounce(githubUsername, 1000);
  const history = useHistory();

  const handleChange = e => {
    setGithubUsername(e.target.value)
  }

  const getUsers = async () => {
    const params = {
      q: githubUsername
    }

    const { data } = await getUsersList(params);
    setSearchResults(data);
  }

  useEffect(() => {
    if (githubUsername) {
      getUsers();
    }
  }, [debounced]);

  useEffect(() => {
    if (!githubUsername) {
      setSearchResults([])
    }
  }, [githubUsername])

  return (
    <div className="container">
      <Input 
        inputContainerClass="tw-mt-4 tw-w-full"
        className="tw-w-full"
        placeholder="Enter github username here . . ."
        onChange={handleChange}
      />
      {searchResults?.totalCount && (
        <Badge
          containerClass="tw-mt-2">
            {searchResults?.totalCount} Results
        </Badge>
      )}
      {searchResults?.items?.length > 0 ? (
        <div className="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 sm:tw-grid-cols-1 tw-gap-2 tw-mt-4">
          {searchResults?.items?.map(result => (
            <Card
              key={result?.id}>
              <img
                src={result?.avatarUrl} 
                className="tw-rounded-full tw-w-24 tw-h-24 tw-object-cover"
              />
              <p className="tw-my-2 tw-text-base tw-font-medium">{result?.login}</p>
              <Button onClick={() => history.push(`users/${result.login}`)}>
                Detail
              </Button>
            </Card>
          ))}
        </div>
      ) : <Icon /> }
    </div>
  )
}

export default Home;