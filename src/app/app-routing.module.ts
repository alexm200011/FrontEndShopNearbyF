import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropietarioListComponent } from './components/propietario-list/propietario-list.component';
const routes: Routes = [
  {path: 'propietario/list', component: PropietarioListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
