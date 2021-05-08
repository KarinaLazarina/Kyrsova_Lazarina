import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MainComponent} from './components/main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'Contract Report', component: MainComponent},
  {path: ':title', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
