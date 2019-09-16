import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import NotFoundPage from './pages/NotFoundPage';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <div id="page-body">
          <Switch>
            <Route path="/" component = {HomePage} exact></Route>
            <Route path="/about" component = {AboutPage}></Route>
            <Route path="/articles-list" component = {ArticlesListPage}></Route>
            <Route path="/article/:name" component = {ArticlePage}></Route>
            <Route component= { NotFoundPage } ></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
