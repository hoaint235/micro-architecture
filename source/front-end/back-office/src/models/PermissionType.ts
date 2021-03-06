import { UnknownType } from './UnknownType';

export enum PermissionType {
  Account = 1,
  Vendor = 2,
  Product = 3,
  Unit = 4,
  Category = 5,
  Permission = 6,
  Dashboard = 7,
  PurchaseOrder = 8,
  SaleOrder = 9,

  Unknown = UnknownType.Unknown
}
