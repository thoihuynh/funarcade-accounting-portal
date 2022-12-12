import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './reducer';
import { AppState } from 'app/appTypes';
import { ApplicationRootState } from 'app/types';

export const selectApp = (state: ApplicationRootState) =>
  state.app || initialState;

export const selectAppPopup = createSelector(
  selectApp,
  (appState: AppState) => appState.appPopup,
);

export const selectAppLoading = createSelector(
  selectApp,
  (appState: AppState) => appState.appLoading,
);

export const selectToastAlert = createSelector(
  selectApp,
  (appState: AppState) => appState.toastAlert,
);

export const selectCurencies = createSelector(selectApp, (appState: AppState) =>
  [...appState.currencies].sort((a, b) =>
    a.shortname.localeCompare(b.shortname),
  ),
);

export const selectUserHistory = createSelector(
  selectApp,
  (appState: AppState) =>
    [...appState.userHistory].sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime(),
    ),
);

export const selectError = createSelector(
  selectApp,
  (appState: AppState) => appState.error,
);

export const selectUserTransaction = createSelector(
  selectApp,
  (appState: AppState) =>
    [...appState.userTransaction].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    ),
);

export const selectResponseSuccess = createSelector(
  selectApp,
  (appState: AppState) => appState.isResponseSuccess,
);
