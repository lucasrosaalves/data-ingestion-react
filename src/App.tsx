import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DataIngestion from './pages/data-ingestion';
import Template from './pages/templates';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Data Ingestion</Link>
          </li>
          <li>
            <Link to="/templates">Templates</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <DataIngestion />
          </Route>
          <Route path="/templates">
            <Template />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
