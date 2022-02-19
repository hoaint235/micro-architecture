import { useController } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useCallback } from 'react';
import get from 'lodash/get';
import { Field } from '@atoms';
import { InputFormProps } from '../form.type';

const Input = (props: InputFormProps) => {
  const {
    name,
    defaultValue,
    children,
    form: {
      control,
      formState: { errors },
    },
    ...restProps
  } = props;
  const { t } = useTranslation();

  const {
    field: { ref, value = '', ...inputProps },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const getError = useCallback(
    () => get(errors, name)?.message,
    [errors, name]
  );

  return (
    <Field.Input
      error={!!getError()}
      value={value}
      helperText={!!getError() && t(getError())}
      {...restProps}
      {...inputProps}
      inputRef={ref}
    />
  );
};

export default Input;
