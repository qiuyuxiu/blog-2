import React from 'react';
import universal from 'react-universal-component';
import { Route } from 'react-router-dom';

const Avatar = universal(() => import('./Avatar'), {
  resolve: () => require.resolveWeak('./Avatar'),
  chunkName: 'Avatar',
  minDelay: 500
});

const Information = universal(() => import('./Information'), {
  resolve: () => require.resolveWeak('./Information'),
  chunkName: 'Information',
  minDelay: 500
});

function App() {
  return (
    <div>
      <Route path="/" exact component={Avatar} />
      <Route path="/account/avatar" exact component={Avatar} />
      <Route path="/account/information" exact component={Information} />
    </div>
  );
}

export default App;
