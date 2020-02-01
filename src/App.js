import React from 'react';
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";
import './App.css';
import {Post} from "./views/Post";
import {Posts} from "./views/Posts";
import {Home} from "./views/Home";

function App() {
  return (
      <Router>
          <header>
              <Link to='/'>HOME</Link>
              <Link to='/posts'>POSTS</Link>
              <Link to='/posts/post'>POST</Link>
              <Link to='/posts/1'>POST 1</Link>
              <Link to='/posts/2'>POST 2</Link>
          </header>
          <main>
              <Switch>
                  <Route path="/posts/:id">
                      <Post />
                  </Route>
                  <Route path="/posts">
                      <Posts />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </main>
      </Router>
  );
}

export default App;
