import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Footer, Header, Hero, Marquee } from "./Components";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;
