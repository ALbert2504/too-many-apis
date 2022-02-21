import { configureStore } from '@reduxjs/toolkit';

// Reducers
import {shoesCollectionApi} from "./services/shoesCollection/shoesCollectionApi";

const store = configureStore({
  reducer: {
    [shoesCollectionApi.reducerPath]: shoesCollectionApi.reducer,
  },
});

export default store;