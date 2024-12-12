import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import RouterUser from "./pages/users/Router";
import RouterPost from "./pages/posts/Router";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={RouterUser} />
        <Route path="/posts" component={RouterPost} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
