import { configureStore } from '@reduxjs/toolkit';

// Reducers
import { shoesCollectionApi } from './services/shoesCollection/shoesCollectionApi';
import { yTToMp3Api } from './services/yTToMp3/yTToMp3Api';

const store = configureStore({
  reducer: {
    [shoesCollectionApi.reducerPath]: shoesCollectionApi.reducer,
    [yTToMp3Api.reducerPath]: yTToMp3Api.reducer,
  },
});

export default store;