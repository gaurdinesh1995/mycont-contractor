import {combineReducers} from 'redux';
import authConstants from './AuthConstants';

export const userInfoReducer = (
  state = {
    user: undefined,
    dashData: {},
    loading: false,
    toast: {title: '', status: 'error', loading: false},
  },
  action,
) => {
  switch (action.type) {
    case authConstants.USER_INFO_RECEIVED:
      return {
        ...state,
        user: action.user,
      };
    case authConstants.SELECTED_USER_ACCOUNT:
      return {
        ...state,
        account: action.account,
      };
    case authConstants.DASHBOARD:
      return {
        ...state,
        dashData: action.dashData,
      };
    case authConstants.GET_PROFILE_STATUS:
      return {
        ...state,
        getStatus: action.dashData,
      };
    case authConstants.LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    case authConstants.TOAST:
      return {
        ...state,
        toast: action.toast,
      };
    default:
      return state;
  }
};

export const authReducers = combineReducers({
  user: userInfoReducer,
});
