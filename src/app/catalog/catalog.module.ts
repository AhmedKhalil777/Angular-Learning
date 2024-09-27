import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import * as catalogComponents from './components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [catalogComponents.All],
  imports: [
    CatalogRoutingModule,
    SharedModule
  ]
})
export class CatalogModule { }
