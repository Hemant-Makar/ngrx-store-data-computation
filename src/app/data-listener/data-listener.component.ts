import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMonitorData } from '../models/imonitor-data';
import { StoreDataService } from '../ngrx-store/store-data.service';

@Component({
  selector: 'app-data-listener',
  templateUrl: './data-listener.component.html',
  styleUrls: ['./data-listener.component.css']
})
export class DataListenerComponent implements OnInit {
  public countObservable$: Observable<number>;
  public dataAObservable$: Observable<IMonitorData>;
  constructor(private storeService: StoreDataService) {}

  ngOnInit() {
    this.countObservable$ = this.storeService.getCount();
    this.dataAObservable$ = this.storeService.getWidgetData('A');
  }
}
