import React from "react";
import { makeStyles, Theme } from "@material-ui/core";
import MenuItem from "../../../components/commons/MenuItem";
import { Home, Settings } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: "calc(100vh - 88px)",
  },
}));

const MenuList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MenuItem path="/users" label="Account" icon={Home} />
      <MenuItem path="/settings" label="Account" icon={Settings} />
    </div>
  );
};

export default MenuList;
