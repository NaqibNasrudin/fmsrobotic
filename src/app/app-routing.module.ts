import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './layout/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { AddProductsComponent } from './pages/add-products/add-products.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
  },

  {
      path: 'login',
      component: AuthComponent,
      children: [
        { path: '', component: LoginComponent }
      ]
  },
  {
    path: 'register',
    component: AuthComponent,
    children: [
      { path: '', component: RegisterComponent }
    ]
},
  {
    path: 'home',
    component: UserComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'add-product', component: AddProductsComponent, title: 'Add Product'}
    ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
