import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import PortfolioComponent from './PortfolioComponent/PortfolioComponent';
import HeaderComponent from './HeaderComponent/HeaderComponent';

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />
      <header className="App-header">
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
      </header>
      <Router>
        <Routes>
          <Route exact path="/" element={<PortfolioComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;