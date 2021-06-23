import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MainSearch from './components/MainSearch';
// import Details from './components/Details';
import CompanySearchResults from './components/CompanySearchResults';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route exact path='/' component={MainSearch} />
      <Route exact path='/:companyName' component={CompanySearchResults} />
      {/* <Route path="/detail/:id" exact render={(routerProps) => <Details {...routerProps}/>} /> */}
    </BrowserRouter>
  );
}

export default App;
