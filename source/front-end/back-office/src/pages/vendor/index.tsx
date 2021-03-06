import { lazy } from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '@routes';
import { Pages } from '@utils';

const AddVendor = lazy(() => import('./Add'));
const ListVendor = lazy(() => import('./List'));

const Vendor = () => (
  <Switch>
    <PrivateRoute exact path={Pages.VENDOR} component={ListVendor} />
    <PrivateRoute exact path={Pages.CREATE_VENDOR} component={AddVendor} />
  </Switch>
);

export default Vendor;
