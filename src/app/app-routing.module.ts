import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';

import { GuardiaoGuard } from './guardiao.guard';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
    path: 'hello-world', title: 'Hello World', component: HelloWorldComponent, children: [
      { path: 'filho-a', title: 'Filho A', component: FilhoAComponent },
      { path: 'filho-b', title: 'Filho B', component: FilhoBComponent }
    ]
  },
  { path: 'data-binding', title: 'Data Binding', component: DataBindingComponent, canActivate: [GuardiaoGuard] },
  { path: 'directives', title: 'Diretivas', component: DirectivesComponent },
  { path: 'customers', title: 'Lista de Clientes', component: CustomerListComponent },
  { path: 'customerdetails/:id', title: 'Detalhes do Cliente', component: CustomerDetailsComponent },
  { path: 'reactive-form', title: 'Reactive Form', component: ReactiveFormComponent },
  { path: 'template-form', title: 'Template Form', component: TemplateFormComponent },
  { path: 'weather', title: 'Clima', component: WeatherComponent },
  { path: 'pipes', title: 'Pipes', component: PipesComponent },
  { path: '', redirectTo: '/hello-world', pathMatch: 'full' },
  { path: '**', title: 'Página não Encontrada', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
