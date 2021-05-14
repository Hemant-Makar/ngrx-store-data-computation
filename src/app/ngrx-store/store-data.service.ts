import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IState } from './istate';
import * as fromStore from './selectors';
@Injectable()
export class StoreDataService {
  constructor(private store: Store<IState>) {}

  public getCount(): Observable<number> {
    return this.store.select(fromStore.getCount);
  }
}
