import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
import Favourites from './components/Favourites';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Main Search</Link>
        </li>
        <li>
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
      <Switch>
        {/* <Route exact path="/"> <MainSearch /> </Route> */}
        {/* <Route exact path="/:companyName"> <CompanySearchResults /> </Route> */}
        <Route exact path='/' component={MainSearch} />
        <Route exact path='/company/:companyName' component={CompanySearchResults} />
        <Route exact path="/favourites" component={Favourites} />
        {/* <Route path="/detail/:id" exact render={(routerProps) => <Details {...routerProps}/>} /> */}
      </Switch>
    </Router >
  );
}

export default App;
