import { Component } from '@angular/core';

// This example is largely based on the following page available from Google:
// https://developers.google.com/web/tools/chrome-devtools/memory-problems/

@Component({
  selector: 'app-evaluate-heap-memory-usage',
  templateUrl: './evaluate-heap-memory-usage.component.html',
  styleUrls: ['./evaluate-heap-memory-usage.component.css']
})
export class EvaluateHeapMemoryUsageComponent {
  private _x: string[];

  constructor() {
    this._x = [];
  }

  public onClickConsumeMemory(): void {
    this._grow();
  }

  public onClickConsumeMemoryOnTimer(): void {
    for (let i = 1; i <= 10; ++i) {
      setTimeout(() => this._grow(), 1000 * i);
    }
  }

  private _grow(): void {
    for (let i = 0; i < 10000; i++) {
      document.body.appendChild(document.createElement('div'));
    }
    this._x.push(new Array(1000000).join('x'));
    console.log('Memory consumed!');
  }
}
