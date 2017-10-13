import { Component, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'app-ignoring-third-party-scripts',
  templateUrl: './ignoring-third-party-scripts.component.html',
  styleUrls: ['./ignoring-third-party-scripts.component.css']
})
export class IgnoringThirdPartyScriptsComponent implements OnInit {
  private _dataset: number[];

  constructor() {
    this._dataset = [];
    for (let i = 0; i < 1000000; i++) {
        this._dataset.push(i);
    }
  }

  ngOnInit() {
  }

  public onClickRunThirdPartyScript(): void {
    debugger;
    const lodashSquared = _.map(this._dataset, x => x * x);
  }
}
