import { configureStore } from '@reduxjs/toolkit';
import { uiSlice } from '@app/store/reducers/ui';
import { authSlice, getRoleListSlice, loadingSlice } from './reducers';

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    authSlice:authSlice,
    loadingSlice:loadingSlice,
    getRoleListSlice:getRoleListSlice
  },
});

export default store;
