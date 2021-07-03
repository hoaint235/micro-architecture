import {
  Hidden,
  IconButton,
  makeStyles,
  Theme,
  useMediaQuery,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";
import { useHistory } from "react-router-dom";
import { Logo } from "../../../../components";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    width: "228px",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  logoContainer: {
    display: "block",
    flexGrow: 1,
    WebkitBoxFlex: 1,
  },
  toggleMenu: {
    display: "inline-flex",
    justifyContent: "center",
  },
}));

type Props = {
  onToggleMenu: () => void;
};

const LeftContainer = (props: Props) => {
  const classes = useStyles();
  const matches = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const history = useHistory();

  const onToggle = () => {
    if (matches) {
      props.onToggleMenu();
    }
  };

  const navigateDefaultPage = (event) => {
    event.preventDefault();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <span className={classes.logoContainer}>
          <Logo src="images/logo.svg" onClick={navigateDefaultPage} />
        </span>
      </Hidden>
      <IconButton
        color="primary"
        className={classes.toggleMenu}
        onClick={onToggle}
      >
        <Menu />
      </IconButton>
    </div>
  );
};

export default LeftContainer;