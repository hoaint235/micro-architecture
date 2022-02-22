import { Card, CardContent, CardHeader, Grid } from '@material-ui/core';
import { useCallback, useState } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Form from '@hook-forms';
import { countries, Roles } from '@utils';
import { Typography } from '@atoms';

type Props = {
  form: UseFormReturn<any>;
  editMode?: boolean;
};

const UserInfoForm = (props: Props) => {
  const { form, editMode } = props;
  const { t } = useTranslation();
  const [roles] = useState<string[]>([]);

  // const fetchRoles = async () => {
  //   const response = await AccountService.gerCurrentUserRoles();
  //   setRoles(response);
  // };

  // useEffect(() => {
  //   fetchRoles();
  // }, []);

  const getRoles = useCallback(() => {
    const result = Object.keys(Roles)
      .filter((x) => x !== 'MasterData')
      .map((key) => ({
        key: Roles[key].toLowerCase(),
        value: t(`roles.${key.toLowerCase()}`),
      }))
      .filter((x) => roles.includes(x.key));
    return result;
  }, [roles, t]);

  return (
    <Card>
      <CardHeader
        title={<Typography.Body label="addUserPage.accountTitle" />}
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Form.Input
              label="fields.firstName"
              name="profile.firstName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Form.Input
              label="fields.lastName"
              name="profile.lastName"
              maxLength={50}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Form.Input
              label="fields.emailAddress"
              name="profile.email"
              disabled={editMode}
              maxLength={100}
              form={form}
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Form.Autocomplete
                  items={countries}
                  form={form}
                  name="profile.countryCode"
                  label="fields.countryCode"
                  disableClearable
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Form.Input
                  form={form}
                  name="profile.phoneNumber"
                  label="fields.phoneNumber"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Form.MultipleSelect
              form={form}
              items={getRoles()}
              name="roles"
              label="addUserPage.roles"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default UserInfoForm;