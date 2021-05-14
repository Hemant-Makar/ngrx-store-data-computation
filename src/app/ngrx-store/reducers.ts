import { IMonitorData } from '../models/imonitor-data';
import { IState } from './istate';
import { Action, createReducer, on, props } from '@ngrx/store';
import { addWidgetData } from './actions';

export const widgetDataFeatureKey = 'monitorData';

export interface QueryParam {
  key: string;
  value: IMonitorData;
}

export const initialState: IState = {
  data: {},
  cache: {},
  count: 0
};

const liveDataReducer = createReducer(
  initialState,
  on(addWidgetData, (state, param: QueryParam) => {
    console.log(param);
    const data = state.data;
    data[param.key] = param.value;
    const count = state.count + 1;
    return {
      ...state,
      count: count,
      data: data
    };
  })
);

// const liveDataReducer = createReducer(
//   initialState,
//   on(addWidgetDataSuccess, (state, widgetParam: WidgetParam) => {
//     const newWidgetData = {
//       ...state.widgetData,
//       [widgetParam.id]: widgetParam.data
//     };
//     return {
//       ...state,
//       widgetData: newWidgetData
//     };
//   }),
//   on(addCountSuccess, (state, data) => {
//     return {
//       ...state,
//       count: data.count
//     };
//   })
// );

export function reducer(state: IState | undefined, action: Action) {
  return liveDataReducer(state, action);
}
