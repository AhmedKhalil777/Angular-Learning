import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Catalog } from '../../models/catalog.model';
import { Observable } from 'rxjs';
import { CatalogService } from 'src/app/shared/services/http/catalog.service';

@Component({
  selector: 'app-catalog-entry',
  templateUrl: './catalog-entry.component.html',
  styleUrls: ['./catalog-entry.component.scss']
})
export class CatalogEntryComponent implements OnInit {

  constructor(private catalogService : CatalogService,private route : ActivatedRoute) { }

  public catId : Observable<number>;

  public images = [];
  public catalog : Catalog;
  ngOnInit(): void {
   this.catId =  this.route.paramMap.pipe(
     map((params) => {
       const id =  Number.parseInt(params.get('id'));
       this.catalogService.getCatalog(id).subscribe(x=> {
         this.catalog = x;
          this.catalog.Images.forEach(y=> this.images.push( {
          image : y.Path,
          thumbImage : y.Path
         }))
       });
       return id;
     })
   );

  }

}
