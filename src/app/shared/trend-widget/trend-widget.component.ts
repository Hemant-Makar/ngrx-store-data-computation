import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IMonitorData } from '../../models/imonitor-data';
import { StoreDataService } from '../../ngrx-store/store-data.service';

@Component({
  selector: 'app-trend-widget',
  templateUrl: './trend-widget.component.html',
  styleUrls: ['./trend-widget.component.css']
})
export class TrendWidgetComponent implements OnInit {
  public countObservable$: Observable<number>;
  public dataAObservable$: Observable<IMonitorData[]>;
  constructor(private storeService: StoreDataService) {}

  ngOnInit() {
    this.countObservable$ = this.storeService.getCount();
    this.dataAObservable$ = this.storeService.getWidgetCacheData('A');
  }
}
