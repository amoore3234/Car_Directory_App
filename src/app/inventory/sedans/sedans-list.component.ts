import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription, map } from 'rxjs';
import { Cars } from '../cars.model';

import * as fromApp from '../../store/app.reducer';
import * as InventoryActions from '../store/inventory.actions';

@Component({
  selector: 'app-sedans-list',
  templateUrl: './sedans-list.component.html',
  styleUrls: ['./sedans-list.component.css']
})
export class SedansListComponent implements OnInit, OnDestroy {
  inventory: Cars[] = [];
  carName: string;
  data!: [];
  itemsPerPage = 8;
  totalItems: any;
  currentPage = 1;
  subscription!: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private route: ActivatedRoute,
    private router: Router) {
  }


  ngOnInit(): void {
    this.subscription = this.store
      .select('allCars')
      .pipe(map(carsState => carsState.allCars))
      .subscribe(
        (data: any) => {
          this.inventory = data;
          this.totalItems = data.length;
        });

    this.route.params.subscribe(params => {
      this.currentPage = +params['page'] ? +params['page'] : 1;
      console.log(this.currentPage);
    });

    this.getInventory();
  }

  getPages(newPage: number) {
    this.router.navigate(['/sedans'], { queryParams: { page: newPage } })
  }

  getInventory() {
    this.store.dispatch(new InventoryActions.FetchSedans());
  }

  search() {
    if (this.carName != "") {
      this.inventory = this.inventory.filter(res => {
        return res.carName.toLocaleLowerCase().match(this.carName.toLocaleLowerCase());
      });
    } else if (this.carName == "") {
      this.ngOnInit()
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
