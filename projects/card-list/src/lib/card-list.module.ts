import { NgModule } from '@angular/core';
import { CardListComponent } from './card-list.component';
import { ProvidePropertyDefValueDirective } from './provide-property-def-value.directive';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material';
import {RegisterPropertyDefService} from './register-property-def.service';

@NgModule({
  declarations: [CardListComponent, ProvidePropertyDefValueDirective],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [RegisterPropertyDefService],
  exports: [CardListComponent, ProvidePropertyDefValueDirective]
})
export class CardListModule { }
