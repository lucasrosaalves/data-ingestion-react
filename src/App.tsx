import { useState } from "react";
import { AppDrawer, Header } from "./presentation/components";
import { useStyles } from "./AppStyles";
import Routes from "./presentation/routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <Header open={open} handleDrawerOpen={() => handleDrawerOpen()} />
        <AppDrawer open={open} handleDrawerClose={() => handleDrawerClose()} />

        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
