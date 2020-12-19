import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList}></Route>
            <Route path="/streams/new" exact component={StreamCreate}></Route>
            <Route
              path="/streams/edit/:id"
              exact
              component={StreamEdit}
            ></Route>
            <Route
              path="/streams/delete/:id"
              exact
              component={StreamDelete}
            ></Route>
            <Route path="/streams/:id" exact component={StreamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
// Switch looks at al the diff routes and only shows one of these given routes for a path that we go to. It shows the first route that matches

export default App;
