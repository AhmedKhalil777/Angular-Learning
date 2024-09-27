import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogListComponent } from './catalog-list.component';
import { Injectable } from '@angular/core';
import { CatalogService } from '../../services/http/catalog.service';
import { Observable, of } from 'rxjs';
import { Catalog } from 'src/app/catalog/models/catalog.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';


@Injectable()
class MockCatalogService extends CatalogService {
  getCatalogs() : Observable<Catalog[]> {

    const res : Catalog[] = [
      { Id : 1, Name : 'Cloth' , Price : '' , Description : '', Images : []},
      { Id : 2, Name : 'Book' , Price : '' , Description : '', Images : []},
      { Id : 3, Name : 'Bag' , Price : '' , Description : '', Images : []},
    ]
    return of(res);
  }
}

describe('CatalogListComponent', () => {

  debugger;
  let component: CatalogListComponent;
  let fixture: ComponentFixture<CatalogListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatalogListComponent],
      imports : [HttpClientTestingModule],
      providers : [
        {
          provide : CatalogService,
          useClass : MockCatalogService 
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list catalogs', () => {
    component.catalogs.subscribe(x=> {
      expect(x[0].Name).toBe('Cloth');
      expect(x[1].Name).toBe('Book');
      expect(x[2].Name).toBe('Bag');
    })
  });
});
