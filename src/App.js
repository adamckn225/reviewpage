import Topic from './Topic/Topic';
import Mostrecent from './Mostrecent/Mostrecent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Expandedqns from './Expandedqns/Expandedqns';
import Practisesimilar from './Practisesimilar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Topic />
            </Route>
            <Route path="/Mostrecent">
              <Mostrecent />
            </Route>
            <Route path="/Expandedqns">
              <Expandedqns />
            </Route>
            <Route path="/Practisesimilar">
              <Practisesimilar />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;