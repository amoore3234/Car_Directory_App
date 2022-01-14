import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs/operators';

import * as fromApp from '../../../../store/app.reducer';
import { Cars } from '../../../cars.model';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit {
  inventory!: Cars;
  id: number = 1;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => {
        return +params['id'];
      }),
      switchMap(id => {
        this.id = id;
        return this.store.select('allCars');
      }),
      map(inventoryState => {
        return inventoryState.allCars
          .find((inventory, index) => {
            return index === this.id;
          });
      })
    ).subscribe(inventory => {
      this.inventory = inventory;
    });
  }

}
