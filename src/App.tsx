import './App.scss';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useState } from 'react';
import TopBar from './presentation/components/TopBar/Index';
import AppDrawer from './presentation/components/AppDrawer/Index';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

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
      <TopBar open={open}  handleDrawerOpen={() => handleDrawerOpen()}/>
      <AppDrawer open={open}  handleDrawerClose={() => handleDrawerClose()} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        
      </main>
    </div>
  );
}

export default App;
