import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OptionStrategyChartPageRoutingModule } from './option-strategy-chart-routing.module';

import { OptionStrategyChartComponent } from './option-strategy-chart.component';

@NgModule({
  imports: [CommonModule, IonicModule, OptionStrategyChartPageRoutingModule],
  declarations: [OptionStrategyChartComponent],
})
export class OptionStrategyChartPageModule {}
