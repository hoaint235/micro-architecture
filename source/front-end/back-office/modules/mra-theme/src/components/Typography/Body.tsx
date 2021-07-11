import { Typography } from "@material-ui/core";
import React from "react";
import { MfaTypographyProps } from "./Typography.type";

const Label = (props: MfaTypographyProps) => {
  const { label, color = "textPrimary", ...restProps } = props;

  return (
    <Typography component="p" variant="body1" color={color} {...restProps}>
      {label}
    </Typography>
  );
};

export default Label;
