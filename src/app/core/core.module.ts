import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';

const COMPONENTS = [
  MessagesComponent,
  ToolbarComponent,
  PageNotFoundComponent
];

const MODULES = [
  FlexLayoutModule,
  MaterialModule, RouterModule
];

@NgModule({
  declarations: [ COMPONENTS ],
  imports: [ MODULES, CommonModule ],
  exports: [ MODULES, COMPONENTS ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule){
    if (parentModule){
      throw new Error('CoreModule já foi chamado. Import somente pelo AppModule.');
    }
  }
 }
