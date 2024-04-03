import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
// import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    // @angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // ReactiveFormsModule,

    CoreModule,
    // // feature
    // DashboardModule,
    // HeroesModule,

    // app
    AppRoutingModule
  ],
  providers: [
    // provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
