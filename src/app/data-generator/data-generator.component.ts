import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {
  private intervalRef: number;
  constructor() {}

  ngOnInit() {}
  onStartClicked() {
    console.log('Start writting...');
    if (this.intervalRef === undefined) {
      this.intervalRef = setInterval(() => {
        console.log('writting...');
      }, 1000);
    }
  }
  onStopClicked() {
    console.log('Stop writting...');
    if (this.intervalRef !== undefined) {
      clearInterval(this.intervalRef);
      this.intervalRef = undefined;
    }
  }
}
