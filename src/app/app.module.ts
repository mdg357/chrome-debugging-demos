import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EvaluatePerformanceComponent } from './evaluate-performance/evaluate-performance.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabularJsonDataComponent } from './tabular-json-data/tabular-json-data.component';
import { MeasuringOperationDurationComponent } from './measuring-operation-duration/measuring-operation-duration.component';
import { IgnoringThirdPartyScriptsComponent } from './ignoring-third-party-scripts/ignoring-third-party-scripts.component';
import { EvaluateMemoryUsageComponent } from './evaluate-memory-usage/evaluate-memory-usage.component';

@NgModule({
  declarations: [
    AppComponent,
    EvaluatePerformanceComponent,
    DashboardComponent,
    TabularJsonDataComponent,
    MeasuringOperationDurationComponent,
    IgnoringThirdPartyScriptsComponent,
    EvaluateMemoryUsageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
