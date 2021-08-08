import Navigationbar from "./components/Navbar.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart.js";
import "./App.scss";

function App() {
  return (
    <Router>
      <Navigationbar></Navigationbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/cart" component={Cart}></Route>
      </Switch>
    </Router>
  );
}

export default App;
