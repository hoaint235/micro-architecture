import { Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { TypographyProps } from './Typography.type';

const Caption = (props: TypographyProps) => {
  const { label, color = 'textPrimary', ...restProps } = props;
  const { t } = useTranslation();

  return (
    <Typography component="p" variant="caption" color={color} {...restProps}>
      {t(label)}
    </Typography>
  );
};

export default Caption;
