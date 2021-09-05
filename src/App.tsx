import { useEffect, useState } from "react";
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

  const languageKey: string = "current-language";
  const availableLanguages: string[] = ["en-US", "pt-BR"];

  const [language, setLanguage] = useState("");

  useEffect(() => {
    const language = localStorage.getItem(languageKey);
    setLanguage(language ?? "en-US");
  }, []);

  const changeLanguage = (language: string) => {
    localStorage.setItem(languageKey, language);
    setLanguage(language);
    window.location.reload();
  };

  return (
    <Router history={history}>
      <div className={classes.root}>
        <Header
          open={open}
          handleDrawerOpen={() => handleDrawerOpen()}
          availableLanguages={availableLanguages}
          selectedLanguage={language}
          handleLanguageChange={(e) => changeLanguage(e.target.value as string)}
        />
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
