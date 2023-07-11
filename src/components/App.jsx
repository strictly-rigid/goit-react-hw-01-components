import React from 'react';

import user from '../components/Profile/user';
import Profile from './Profile/Profile.jsx';

import data from '../components/Statistics/data';
import Statistics from './Statistics/Statistics.jsx';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
