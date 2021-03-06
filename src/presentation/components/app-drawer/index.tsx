import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface Props {
  open: boolean;
  handleDrawerClose: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function AppDrawer(props: Props) {
  const {t} = useTranslation();

  const classes = useStyles();
  const theme = useTheme();

  const routes = [
    { key: 1, name: t('sideMenu.dataIngestion'), route: "/data-ingestion", icon: <InboxIcon /> },
    { key: 2, name: t('sideMenu.templates'), route: "/templates", icon: <MailIcon /> },
  ];
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.open,
        [classes.drawerClose]: !props.open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={props.handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {routes.map((r) => (
          <ListItem button key={r.key} component={Link} to={r.route}>
            <ListItemIcon>{r.icon}</ListItemIcon>
            <ListItemText primary={r.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default AppDrawer;
