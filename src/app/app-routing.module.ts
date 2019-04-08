import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: './public-pages/public-pages.module#PublicPagesModule'
  },
  {
    path: 'user',
    loadChildren: './private-pages/private-pages.module#PrivatePagesModule'
  },
  {
    path: '',
    redirectTo: '/public/register',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/public/register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
