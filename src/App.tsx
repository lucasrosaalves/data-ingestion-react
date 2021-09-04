import { useState } from 'react';
import { AppDrawer, Header } from './presentation/components';
import { useStyles } from './AppStyles'

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
    <div className={classes.root}>
      <Header open={open}  handleDrawerOpen={() => handleDrawerOpen()}/>
      <AppDrawer open={open}  handleDrawerClose={() => handleDrawerClose()} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}

export default App;
