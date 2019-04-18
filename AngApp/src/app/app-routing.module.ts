import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfilesComponent} from './profiles/profiles.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileDetailComponent} from './profile-detail/profile-detail.component';
import {CurrencyExchangeComponent} from './currency-exchange/currency-exchange.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profiles', component: ProfilesComponent },
  { path: 'detail/:id', component: ProfileDetailComponent },
  { path: 'exchanges', component: CurrencyExchangeComponent}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {}
