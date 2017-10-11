import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabularJsonDataComponent } from '../tabular-json-data/tabular-json-data.component';
import { MeasuringOperationDurationComponent } from '../measuring-operation-duration/measuring-operation-duration.component';
import { IgnoringThirdPartyScriptsComponent } from '../ignoring-third-party-scripts/ignoring-third-party-scripts.component';
import { EvaluatePerformanceComponent } from '../evaluate-performance/evaluate-performance.component';
import { EvaluateMemoryUsageComponent } from '../evaluate-memory-usage/evaluate-memory-usage.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'TabularJsonData',
    component: TabularJsonDataComponent
  },
  {
    path: 'MeasuringOperationDuration',
    component: MeasuringOperationDurationComponent
  },
  {
    path: 'IgnoringThirdPartyScripts',
    component: IgnoringThirdPartyScriptsComponent
  },
  {
    path: 'EvaluatePerformance',
    component: EvaluatePerformanceComponent
  },
  {
    path: 'EvaluateMemoryUsage',
    component: EvaluateMemoryUsageComponent
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
