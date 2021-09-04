import { Route, Switch } from "react-router";
import { DataIngestion, Templates } from "../pages";


function Routes() {
  return (
    <Switch>
    <Route path="/" exact={true}>
      <DataIngestion />
    </Route>
    <Route path="/templates">
      <Templates />
    </Route>
  </Switch>
  );
}

export default Routes;
