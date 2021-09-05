import { useEffect, useState } from "react";
import { AppDrawer, Header } from "./presentation/components";
import { useStyles } from "./AppStyles";
import Routes from "./presentation/routes";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import i18next  from "i18next";

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
  const availableLanguages: string[] = ["en", "pt"];

  const [language, setLanguage] = useState("");

  useEffect(() => {
    const language = localStorage.getItem(languageKey) ?? "en";
    i18next.changeLanguage(language);
    setLanguage(language);
  }, []);

  const changeLanguage = (language: string) => {
    localStorage.setItem(languageKey, language);
    i18next.changeLanguage(language);
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
