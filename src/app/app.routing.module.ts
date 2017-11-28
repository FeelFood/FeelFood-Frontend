import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { AuthFbComponent } from './components/authFb/authFb.component';
import { AuthGuard} from './guards/auth.guard';
import { NotAuthGuard} from './guards/notAuth.guard';

export const Router: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home/restaurantProfile', redirectTo: '/restaurantProfile', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, canActivate: [NotAuthGuard]},
  { path: 'userProfile', component: UserComponent, canActivate: [AuthGuard]},
  { path: 'restaurantProfile', component: RestaurantComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'home', component: HomeComponent},
  { path: 'auth/:username/:token', component: AuthFbComponent, canActivate: [NotAuthGuard]},
  { path: '**', redirectTo: '/home'}
];
export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(Router);
