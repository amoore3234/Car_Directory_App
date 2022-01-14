import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';
import { Cars } from 'src/app/inventory/cars.model';

import * as fromApp from '../../../../store/app.reducer';

@Component({
  selector: 'app-sedans-details',
  templateUrl: './sedans-details.component.html',
  styleUrls: ['./sedans-details.component.css']
})
export class SedansDetailsComponent implements OnInit {
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
