import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabularJsonDataComponent } from '../tabular-json-data/tabular-json-data.component';
import { MeasuringOperationDurationComponent } from '../measuring-operation-duration/measuring-operation-duration.component';
import { IgnoringThirdPartyScriptsComponent } from '../ignoring-third-party-scripts/ignoring-third-party-scripts.component';
import { EvaluateHeapMemoryUsageComponent } from '../evaluate-heap-memory-usage/evaluate-heap-memory-usage.component';
import { DiscoverMemoryLeaksComponent } from '../discover-memory-leaks/discover-memory-leaks.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: 'Dashboard'}
  },
  {
    path: 'TabularJsonData',
    component: TabularJsonDataComponent,
    data: { title: 'Tabular Json Data'}
  },
  {
    path: 'MeasuringOperationDuration',
    component: MeasuringOperationDurationComponent,
    data: { title: 'Measuring Operation Duration'}
  },
  {
    path: 'IgnoringThirdPartyScripts',
    component: IgnoringThirdPartyScriptsComponent,
    data: { title: 'Ignoring Third-Party Scripts'}
  },
  {
    path: 'EvaluateHeapMemoryUsage',
    component: EvaluateHeapMemoryUsageComponent,
    data: { title: 'Evaluate Heap Memory Usage'}
  },
  {
    path: 'DiscoverMemoryLeaks',
    component: DiscoverMemoryLeaksComponent,
    data: { title: 'Discover Memory Leaks'}
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
