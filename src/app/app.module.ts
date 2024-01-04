import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';

registerLocaleData(ptBr)

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DataBindingComponent,
    FilhoAComponent,
    FilhoBComponent,
    DirectivesComponent,
    CustomerListComponent,
    PageNotFoundComponent,
    CustomerDetailsComponent,
    ReactiveFormComponent,
    TemplateFormComponent,
    WeatherComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
