import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Catalog}  from '../../../catalog/models/catalog.model';
import { CatalogService } from '../../services/http/catalog.service';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  catalogs :  Observable<Catalog[]>
  constructor(private catalogService :CatalogService) { }

  ngOnInit(): void {
    this.catalogs = this.catalogService.getCatalogs();
  }

}
