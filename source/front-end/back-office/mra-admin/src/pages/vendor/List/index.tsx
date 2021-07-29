import { Box, Grid } from "@material-ui/core";
import { IVendorView, ListingRequest, ListingResponse } from "model";
import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  ListVendors as Vendors,
  SkeletonTemplate,
  Button,
  Field,
  HeaderProps,
  MainContainer,
  PagingProps,
  SortProps,
} from "../../../components";
import { useConfirm } from "../../../hooks";
import { VendorService } from "../../../services";
import { Pages } from "../../../utils";

const headers: HeaderProps[] = [
  {
    field: "name",
    label: "table.name",
  },
  {
    field: "email",
    label: "table.email",
  },
  {
    field: "phoneNumber",
    label: "table.phoneNumber",
  },
  {
    field: "address",
    label: "table.address",
  },
  {
    field: "active",
    label: "table.active",
  },
  {
    field: "action",
    label: "table.action",
  },
];

const ListVendors = () => {
  const [data, setData] = useState<ListingResponse<IVendorView> | null>(null);
  const history = useHistory();
  const confirm = useConfirm();

  const fetchVendors = useCallback(async (request?: ListingRequest) => {
    const defaultRequest = {
      limit: 10,
      offset: 0,
    };
    const payload = { ...defaultRequest, ...request };
    const vendors = await VendorService.getVendors(payload);
    setData({ ...data, ...vendors });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchVendors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDeactivate = async (userId: string) => {};

  const onActivate = async (userId: string) => {};

  const onDelete = async (userId: string) => {
    try {
      confirm({
        title: "Are you sure",
        description: "This action is permanent!",
        onSubmit: () => {
          throw new Error();
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onViewDetail = (userId: string) => history.push(Pages.GET_USER(userId));

  const onSearch = async (value: string) => {};

  const onPaging = async (data: PagingProps) => {};

  const onSort = async (data: SortProps) => {};

  const navigateAddVendorPage = () => history.push(Pages.CREATE_VENDOR);

  return (
    <MainContainer title="listVendorPage.title">
      {data ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Field.Search
              label="listVendorPage.searchText"
              onSubmit={onSearch}
            />
          </Grid>
          <Grid item xs={12} container md={7} justifyContent="flex-end">
            <Box mt={{ xs: 2, sm: 0 }}>
              <Button.Primary
                name="addUser"
                label="listVendorPage.addVendor"
                onClick={navigateAddVendorPage}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box mt={2}>
              <Vendors
                data={data}
                headers={headers}
                onDeactivate={onDeactivate}
                onActivate={onActivate}
                onDelete={onDelete}
                onViewDetail={onViewDetail}
                onPaging={onPaging}
                onSort={onSort}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <SkeletonTemplate.List />
      )}
    </MainContainer>
  );
};

export default ListVendors;
