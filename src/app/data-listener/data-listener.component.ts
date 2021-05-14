import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDataService } from '../ngrx-store/store-data.service';

@Component({
  selector: 'app-data-listener',
  templateUrl: './data-listener.component.html',
  styleUrls: ['./data-listener.component.css']
})
export class DataListenerComponent implements OnInit {
  public countObservable$: Observable<number>;
  constructor(private storeService: StoreDataService) {}

  ngOnInit() {
    this.countObservable$ = this.storeService.getCount();
  }
}
