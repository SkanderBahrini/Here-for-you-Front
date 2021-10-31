
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './componentts/Navigation';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './componentts/Home';
import Ourservices from './componentts/Oursevices';
import Contactus from './componentts/Contactus';
function App() {
  return (

    <Router>
    <div className="App">
    <Navigation/>
    <div className="content">
    <Switch>
      <Route exact path='/home'>
        <Home/>
      </Route>
      <Route exact path ='/ourservices'>

       <Ourservices/>
      </Route>
      <Route exact path ='/contactus'>

        <Contactus/>
      </Route>

    </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
