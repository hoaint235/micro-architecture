import { Grid } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Pages, toastHelper } from '@utils';
import { accountService } from '@services';
import {
  ManageUserForm,
  SkeletonTemplate,
  MainContainer,
} from '@components';
import { IUser } from '@models';

const EditUser = () => {
  const history = useHistory();
  const params: any = useParams();
  const [user, setUsers] = useState<IUser | null>(null);

  const fetchUser = useCallback(async () => {
    const useId = params?.userId;
    if (useId) {
      const response = await accountService.getUserById(useId);
      setUsers(response);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, []);

  const onSubmit = async (data: IUser) => {
    await accountService.createUser(data);
    toastHelper.success('Create new user success');
    onBackUserList();
  };

  const onBackUserList = () => history.push(Pages.USER);

  return (
    <MainContainer title="editUserPage.title">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {user ? (
            <ManageUserForm
              onBack={onBackUserList}
              onSubmit={onSubmit}
              defaultUser={user}
            />
          ) : (
            <SkeletonTemplate.Form />
          )}
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default EditUser;
