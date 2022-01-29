import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import HeaderComponent from './HeaderComponent/HeaderComponent';
import HomeComponent from './HomeComponent/HomeComponent';
import ProjectsComponent from 'ProjectsComponent/ProjectsComponent';
import BlogComponent from 'BlogComponent/BlogComponent';
import AboutComponent from 'AboutComponent/AboutComponent';

const App = () => {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route exact path="/home" element={<HomeComponent />} />
          <Route exact path="/projects" element={<ProjectsComponent />} />
          <Route exact path="/blog" element={<BlogComponent />} />
          <Route exact path="/about" element={<AboutComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;