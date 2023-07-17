import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OptionStrategyChartComponent } from './option-strategy-chart.component';

const routes: Routes = [
  {
    path: '',
    component: OptionStrategyChartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OptionStrategyChartPageRoutingModule {}
