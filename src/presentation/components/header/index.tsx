import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./styles";
import { Select } from "@material-ui/core";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  availableLanguages: string[];
  selectedLanguage: string;
  handleDrawerOpen: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleLanguageChange: (e: React.ChangeEvent<{ name?: string | undefined; value: unknown; }>) => void;
}

function Header(props: Props) {
  const { t } = useTranslation();
  
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {t('companyName')}
        </Typography>
      </Toolbar>
      <Select
        id="language-selection"
        value={props.selectedLanguage}
        className={classes.languageSelect}
        onChange={props.handleLanguageChange}
      >
        {props.availableLanguages.map(l => {
         return (<option value={l} key={l}>{l}</option>)
        })}
      </Select>
    </AppBar>
  );
}

export default Header;

