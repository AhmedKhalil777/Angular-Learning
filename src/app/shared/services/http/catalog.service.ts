import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Catalog } from 'src/app/catalog/models/catalog.model';
import { OData } from '../../models/odata';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private client : HttpClient) { }

  getCatalogs() : Observable<Catalog[]> {
    return this.client.get<OData<Catalog>>('http://localhost:5180/odata/catalogs').pipe( map(res=> res.value));
  }
}
