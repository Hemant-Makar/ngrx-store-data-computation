import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IState } from './istate';
export const selectFeatureState = createFeatureSelector<IState>('liveData');

export const widgetFeature = createSelector(
  selectFeatureState,
  (state: IState) => {
    return state.data;
  }
);

export const getWidgetData = createSelector(
  widgetFeature,
  (widget, id: string) => {
    return widget[id];
  }
);
export const getCount = createSelector(
  selectFeatureState,
  (state: IState) => {
    return state.count;
  }
);
