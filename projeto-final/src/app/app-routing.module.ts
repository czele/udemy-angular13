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
  // spread operator
  ...DashboardRoutes,
  ...CalculadoraRoutes,
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
