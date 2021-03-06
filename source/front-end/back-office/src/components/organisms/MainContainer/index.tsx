import { Card, CardContent, CardHeader, Paper } from '@material-ui/core';
import { Typography } from '@atoms';
import {
  useStyleCardHeader,
  useStylePaper,
  useStyles,
} from './MainContainer.style';

type Props = {
  title: string;
  children?: any;
  action?: any;
};

const MainContainer = (props: Props) => {
  const { title, children, action } = props;
  const classesPaper = useStylePaper();
  const classesCardHeader = useStyleCardHeader();
  const classes = useStyles();

  return (
    <>
      <Paper component={Card} classes={{ ...classesPaper }} elevation={0}>
        <CardHeader
          classes={{ ...classesCardHeader }}
          subheader={<Typography.Subtitle label={title} />}
          action={action}
        />
      </Paper>
      <Paper component={Card} classes={{ ...classesPaper }}>
        <CardContent className={classes.content}>{children}</CardContent>
      </Paper>
    </>
  );
};

export default MainContainer;
