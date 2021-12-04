import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SectorPerformanceComponent } from './sector-performance/sector-performance.component';
import { EarningsComponent } from './earnings/earnings.component';
import { DividendsComponent } from './dividends/dividends.component';
import { MarketBriefComponent } from './market-brief/market-brief.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DashboardMainComponent,
    SectorPerformanceComponent,
    EarningsComponent,
    DividendsComponent,
    MarketBriefComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }
