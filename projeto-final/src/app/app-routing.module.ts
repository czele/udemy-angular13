import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraRoutes } from './calculadora/components/calculadora-routing.module';

import { DashboardRoutes } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...CalculadoraRoutes,
];

// https://stackoverflow.com/questions/55030308/dynamically-create-routes-array-for-angular-router
// https://angular-training-guide.rangle.io/features/es6/spread_and_rest
// spread operator

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
