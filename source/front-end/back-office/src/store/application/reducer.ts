import { Action } from '../app-type';
import { PermissionType, RoleType, ActionType } from '@models';
import {
  SHOW_LOADING,
  HIDE_LOADING,
  GET_ROLES,
  GET_PERMISSIONS,
  GET_ACTIONS,
  SET_CURRENT_PERMISSION,
  SET_CURRENT_ROLE,
  RESET_ALL_PERMISSION,
} from './type';

export type State = {
  countLoading: number;
  roles: RoleType[];
  permissions: PermissionType[];
  actions: ActionType[];
  currentPermission: PermissionType;
  currentRole: RoleType;
};

export const initializeState: State = {
  countLoading: 0,
  roles: [],
  permissions: [],
  actions: [],
  currentPermission: PermissionType.Unknown,
  currentRole: RoleType.Unknown,
};

const applicationReducer = (
  state: State = initializeState,
  action: Action
): State => {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        countLoading: state.countLoading + 1,
      };
    case HIDE_LOADING:
      return {
        ...state,
        countLoading: state.countLoading - 1,
      };
    case GET_ROLES:
      return {
        ...state,
        roles: [...action.payload],
      };
    case GET_PERMISSIONS:
      return {
        ...state,
        permissions: [...action.payload],
      };
    case SET_CURRENT_PERMISSION:
      return {
        ...state,
        currentPermission: action.payload,
      };
    case SET_CURRENT_ROLE:
      return {
        ...state,
        currentRole: action.payload,
      };
    case GET_ACTIONS:
      return {
        ...state,
        actions: [...action.payload],
      };
    case RESET_ALL_PERMISSION:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default applicationReducer;
