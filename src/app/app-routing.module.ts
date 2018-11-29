import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DataComponent,
  DashboardComponent,
  DataDetailComponent
} from './components';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'list', component: DataComponent},
  {path: 'detail/:id', component: DataDetailComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
