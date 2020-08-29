import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';

const routes: Routes = [
	{ path: '', component: Pantalla1Component },
	{ path: 'resultados/:q', component: Pantalla2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }