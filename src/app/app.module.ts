import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    FormsModule,
    BrowserAnimationsModule,
    // ReactiveFormsModule,

    // // feature
    // DashboardModule,
    // HeroesModule,

    // app
    AppRoutingModule,
    CoreModule
  ],
  providers: [
    // provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
