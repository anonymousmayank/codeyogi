import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './pages/Auth.page';
import AppContainer from './pages/AppContainer.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from='/' to='/login' exact />
        <Route path={['/login', '/signup']} exact><AuthPage></AuthPage></Route>
        <Route path={['/dashboard', '/batch/:batchNumber/lecture/:lectureNumber']} exact><AppContainer></AppContainer></Route>
        <Route><NotFoundPage></NotFoundPage></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
