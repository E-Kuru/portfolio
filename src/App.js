import './App.css';
import './normalize.css';
import './css/skills.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from './component/Home';
import Skills from './component/Skills';


function notFound() {
  return (
    <h1>404 Page Not Found</h1>
  )
}

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skills' component={Skills} />
          <Route component={notFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
