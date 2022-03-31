import "./App.css";
import Hero from "./components/Hero";
import AdminPage from "./components/AdminPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header"></header>
        <Switch>
        <Route path="/admin">
            <AdminPage></AdminPage>
          </Route>
          <Route path="/">
            <div className="Heroes">
              <p>Heroes</p>
              <Hero></Hero>
              <Hero></Hero>
              <Hero></Hero>
              <Hero></Hero>
              <Hero></Hero>
            </div>
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
