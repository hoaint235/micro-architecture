import { makeStyles } from '@material-ui/core';

export const useCellStyles = (column: number) =>
  makeStyles({
    root: {
      width: `calc(100%/${column})`,
    },
  });

export const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
    backgroundColor: 'rgba(224, 224, 224, 0.4)',
  },
});
