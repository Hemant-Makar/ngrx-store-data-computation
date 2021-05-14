import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './istate';
export const selectFeatureState = createFeatureSelector<IState>('liveData');

export const getWidgettData = createSelector(
  selectFeatureState,
  (state: IState) => {
    return state.data;
  }
);

export const getCount = createSelector(
  selectFeatureState,
  (state: IState) => {
    return state.count;
  }
);
