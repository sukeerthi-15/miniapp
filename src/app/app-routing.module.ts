import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePageComponent } from './create-page/create-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginPageComponent},
  {path:'create',component:CreatePageComponent,canActivate:[AuthGuard]},
  {path:'',component:LoginPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
