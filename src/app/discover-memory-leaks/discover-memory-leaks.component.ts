import { Component } from '@angular/core';

// This example is largely based on the following page available from Google:
// https://developers.google.com/web/tools/chrome-devtools/memory-problems/

@Component({
  selector: 'app-discover-memory-leaks',
  templateUrl: './discover-memory-leaks.component.html',
  styleUrls: ['./discover-memory-leaks.component.css']
})
export class DiscoverMemoryLeaksComponent {
  private _detachedNodes: HTMLUListElement;

  constructor() { }

  public onClickCreateDetachedDomTree(): void {
    this._create();
  }

  private _create() {
    const ul = document.createElement('ul');
    for (let i = 0; i < 10; i++) {
      const li = document.createElement('li');
      ul.appendChild(li);
    }
    this._detachedNodes = ul;
  }
}
