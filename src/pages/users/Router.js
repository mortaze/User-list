import { Switch, Route, useRouteMatch } from "react-router-dom";
import IndexUser from "./Index";
import ShowUser from "./Show";

const RouterUser = () => {
  const { path } = useRouteMatch();

  return (
    <div className="container mt-5">
      <div className="row g-3">
        <Switch>
          <Route exact path={path} component={IndexUser} />
          <Route path={`${path}/:userId`} component={ShowUser} />
        </Switch>
      </div>
    </div>
  );
};

export default RouterUser;
