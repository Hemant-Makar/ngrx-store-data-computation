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
    const count = state.count + 1;
    const data = { ...state.data, [param.key]: param.value };

    var paramCache: Array<IMonitorData> = state.cache[param.key];

    if (paramCache === undefined) {
      paramCache = [param.value];
      console.log('if', caches);
    } else {
      const record = param.value;
      paramCache.push(record);
      console.log('else', paramCache.length);
    }
    const cache = { ...state.cache, [param.key]: caches };
    console.log(cache);
    // cache[param.value.id] = caches;
    return {
      ...state,
      count: count,
      data: data,
      cache: cache
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
