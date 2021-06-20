import { Button, ButtonProps } from "@material-ui/core";
import React from "react";

const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button variant="contained" color="primary" {...props}>
      {children}
    </Button>
  );
};

export default PrimaryButton;
