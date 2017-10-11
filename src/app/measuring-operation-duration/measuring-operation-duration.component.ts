import { Component, OnInit } from '@angular/core';
import _ from 'lodash';


@Component({
  selector: 'app-measuring-operation-duration',
  templateUrl: './measuring-operation-duration.component.html',
  styleUrls: ['./measuring-operation-duration.component.css']
})
export class MeasuringOperationDurationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onClickRunSingleTimer(): void {
    const timerName = 'Some meaningful timer name';
    console.warn('Starting a timer');
    console.time(timerName);
    setTimeout(() => console.timeEnd(timerName), 5000);
  }

  // Following example comes from http://madole.xyz/using-console-time-to-profile-performance-in-your-node-app/
  public onClickRunMultipleTimers(): void {
    const dataset = [];
    for (let i = 0; i < 1000000; i++) {
        dataset.push(i);
    }

    console.time('map');
    const squared = dataset.map(x => x * x);
    console.timeEnd('map');

    console.time('lodash map');
    const lodashSquared = _.map(dataset, x => x * x);
    console.timeEnd('lodash map');

    console.time('filter');
    const filtered = dataset.filter(x => x % 2 === 0);
    console.timeEnd('filter');

    console.time('lodash filter');
    const lodashFiltered = _.filter(dataset, x => x % 2 === 0);
    console.timeEnd('lodash filter');
  }
}
