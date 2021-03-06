import { Theme, useMediaQuery } from '@material-ui/core';
import { useEffect } from 'react';

type Props = {
  onExecute?: () => void;
};

const useMobile = (props?: Props) => {
  const isMobile = useMediaQuery<Theme>((theme: Theme) =>
    theme.breakpoints.down('sm')
  );

  useEffect(() => {
    if (isMobile && props?.onExecute) {
      props?.onExecute();
    }
  }, [isMobile]);

  return {
    isMobile,
  };
};

export default useMobile;
