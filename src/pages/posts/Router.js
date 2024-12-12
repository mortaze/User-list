import { Switch, Route, useRouteMatch } from "react-router-dom";
import IndexPost from "./Index";
import ShowPost from "./Show";
import CreatePost from "./create";
import EditPost from "./Edit";

const RouterPost = () => {
  const { path } = useRouteMatch();

  return (
    <div className="container mt-5">
      <div className="row g-3">
        <Switch>
          <Route exact path={path} component={IndexPost} />
          <Route exact path={`${path}/create`} component={CreatePost} />
          <Route exact path={`${path}/edit/:postId`} component={EditPost} />
          <Route exact path={`${path}/:postId`} component={ShowPost} />
        </Switch>
      </div>
    </div>
  );
};

export default RouterPost;
