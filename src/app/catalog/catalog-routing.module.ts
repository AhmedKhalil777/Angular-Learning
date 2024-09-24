import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogEntryComponent } from './components/catalog-entry/catalog-entry.component';

const routes: Routes = [{
  path : '',
  component: CatalogEntryComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
