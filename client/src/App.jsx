import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import ProductList from "./pages/ProductList/ProductList";
import Register from "./pages/Register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state)=> state.user.currentUser);

  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:category">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
          <Route path="/register">
            <Route path="/login">
              {user ? <Redirect to="/" /> : <Register />}
            </Route>
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
