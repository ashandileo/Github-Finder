import React,{ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Repos from './../Repos/Repos';
import TextButton from '../../components/TextButton/TextButton';
import UserDetailCard from '../../components/UserDetailCard/UserDetailCard';
import { getUserDetail, getRepos } from '../../client/githubClient';

const UserDetail = () => {
  const history = useHistory();
  const [userDetail, setUserDetail] = useState([]);
  const [userRepos, setUserRepos] = useState([]);
  const username = history.location.pathname.replace('/users/', '').trim();

  const getUserRepos = async () => {
    const { data } = await getRepos(username);
    setUserRepos(data);
  }

  const getUser = async () => {
    const { data } = await getUserDetail(username);
    setUserDetail(data);

    if (data?.reposUrl) {
      getUserRepos();
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container">
      <TextButton className="tw-mt-3" onClick={() => history.push('/')}>
        Back to search
      </TextButton>
      <UserDetailCard userDetail={userDetail} />
      <Repos userRepos={userRepos} />
    </div>
  ) 
}

export default UserDetail;