import './App.css';
import AxiosAnime from '../src/components/AxiosAnime'
import About from '../src/components/About'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <h1> Anime List</h1>
        <nav className="nav-bar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/" exact>
            <AxiosAnime />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
