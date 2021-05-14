import { Component, OnInit } from '@angular/core';
import { IMonitorData } from '../models/imonitor-data';
import { StoreDataService } from '../ngrx-store/store-data.service';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {
  private intervalRef: number;
  constructor(private storeService: StoreDataService) {}

  ngOnInit() {}
  onStartClicked() {
    console.log('Start writting...');
    this.clear();
    if (this.intervalRef === undefined) {
      this.intervalRef = setInterval(() => {
        const time = Date.now();
        const widget: IMonitorData = {
          id: 'A',
          value: Math.random() * 10,
          time: time
        };
        this.storeService.setWidgetData(widget);
        console.log('writting...', widget.value);
      }, 10000);
    }
  }
  onStopClicked() {
    console.log('Stop writting...');
    this.clear();
  }

  private clear() {
    if (this.intervalRef !== undefined) {
      clearInterval(this.intervalRef);
      this.intervalRef = undefined;
    }
  }
}
