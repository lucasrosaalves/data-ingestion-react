import { Route, Switch } from "react-router";
import { DataIngestion, Templates } from "../pages";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact={true}>
        <Templates />
      </Route>
      <Route path="/templates">
        <Templates />
      </Route>
      <Route path="/data-ingestion">
        <DataIngestion />
      </Route>
    </Switch>
  );
}

export default Routes;
