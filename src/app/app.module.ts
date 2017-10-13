import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabularJsonDataComponent } from './tabular-json-data/tabular-json-data.component';
import { MeasuringOperationDurationComponent } from './measuring-operation-duration/measuring-operation-duration.component';
import { IgnoringThirdPartyScriptsComponent } from './ignoring-third-party-scripts/ignoring-third-party-scripts.component';
import { EvaluateHeapMemoryUsageComponent } from './evaluate-heap-memory-usage/evaluate-heap-memory-usage.component';
import { DiscoverMemoryLeaksComponent } from './discover-memory-leaks/discover-memory-leaks.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TabularJsonDataComponent,
    MeasuringOperationDurationComponent,
    IgnoringThirdPartyScriptsComponent,
    EvaluateHeapMemoryUsageComponent,
    DiscoverMemoryLeaksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
