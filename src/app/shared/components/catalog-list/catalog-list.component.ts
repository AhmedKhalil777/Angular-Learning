import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Catalog}  from '../../../catalog/models/catalog.model';
import { CatalogService } from '../../services/http/catalog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {

  catalogs :  Observable<Catalog[]>
  constructor(private catalogService :CatalogService, private router: Router) { }

  ngOnInit(): void {
    this.catalogs = this.catalogService.getCatalogs();
  }


  /**
   * routes the page to exact catalog by Id
   * @param catalogId the catalog Id
   */
  showCatalog(catalogId : number){
    this.router.navigate(['', catalogId]);
  }

}
