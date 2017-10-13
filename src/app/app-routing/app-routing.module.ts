import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TabularJsonDataComponent } from '../tabular-json-data/tabular-json-data.component';
import { MeasuringOperationDurationComponent } from '../measuring-operation-duration/measuring-operation-duration.component';
import { IgnoringThirdPartyScriptsComponent } from '../ignoring-third-party-scripts/ignoring-third-party-scripts.component';
import { EvaluateMemoryUsageComponent } from '../evaluate-memory-usage/evaluate-memory-usage.component';

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
    path: 'EvaluateMemoryUsage',
    component: EvaluateMemoryUsageComponent,
    data: { title: 'Evaluate Memory Usage'}
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
