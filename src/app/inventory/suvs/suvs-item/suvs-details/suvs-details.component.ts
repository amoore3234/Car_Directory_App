import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { Cars } from 'src/app/inventory/cars.model';
import { InventoryService } from 'src/app/inventory/inventory.service';

import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-suvs-details',
  templateUrl: './suvs-details.component.html',
  styleUrls: ['./suvs-details.component.css']
})
export class SuvsDetailsComponent implements OnInit {
  inventory!: Cars;
  id: number = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService,
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
