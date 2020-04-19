import { createSelector } from 'reselect'

export const getUsers = state => state.usersPage.users;
export const getUsersSuper = createSelector(
    getUsers,
    users => users
);
export const getPageSize = state => state.usersPage.pageSize;
export const getTotalCountUsers = state => state.usersPage.totalCountUsers;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getFollowingInProgress = state => state.usersPage.followingInProgress;
export const getIsFetching = state => state.usersPage.isFetching;

