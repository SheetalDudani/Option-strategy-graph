import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'option-strategy-chart',
    pathMatch: 'full',
  },
  {
    path: 'option-strategy-chart',
    loadChildren: () =>
      import('./option-strategy-chart/option-strategy-chart.module').then(
        (m) => m.OptionStrategyChartPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      // relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
