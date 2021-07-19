import { Checkbox } from "@mra/theme";
import React, { useMemo } from "react";
import { useController } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { CheckboxFormProps, Rules } from "../form-type";

const CheckBox = (props: CheckboxFormProps) => {
  const {
    name,
    defaultValue,
    rules,
    onChangeValue,
    useDefaultRules = false,
    form: { control },
    ...restProps
  } = props;
  const { t } = useTranslation();

  const defaultRules = useMemo(() => {
    let rules: Rules = {};
    if (useDefaultRules) {
      rules = {
        required: {
          value: true,
          message: t("errors.requiredField"),
        },
      };
    }

    return rules;
  }, [rules, useDefaultRules]);

  const {
    field: { ref, onChange, ...inputProps },
  } = useController({
    name,
    control,
    rules: Object.assign({ ...defaultRules }, { ...rules }),
    defaultValue,
  });

  return (
    <Checkbox
      data-testid={`checkbox-${name}`}
      inputRef={ref}
      onChange={(e) => {
        onChange(e);
        onChangeValue(e.target.value);
      }}
      inputProps={{ ...inputProps }}
      {...restProps}
    />
  );
};

export default CheckBox;
