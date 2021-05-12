import Navbar from  './Components/Navbar'
// import Login from './Components/Login'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';


function App() {
  return (
    <Router>
    <div className="App">
    <div className="yes">
          <Navbar />
        </div>
        <Switch>
        {/* <Route exact path="/" component={Navbar} /> */}
          <Route exact path="/Login" component={Login} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
