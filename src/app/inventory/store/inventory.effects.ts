import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";

import { ActionsSubject, Store } from "@ngrx/store";
import { map, switchMap } from "rxjs/operators";
import * as fromApp from "../../store/app.reducer";
import { Cars } from "../cars.model";
import { InventoryService } from "../inventory.service";
import * as CarActions from "./inventory.actions";

@Injectable()
export class CarEffects {
    pageNums!: Cars;
    offset: number = 0;

    fetchCars = createEffect(() =>
        this.actions$
            .pipe(
                //ofType<CarActions.FetchCars>
                ofType(CarActions.FETCH_CARS),
                switchMap(() => {
                    //return this.inventoryService.getCars(action.payload.limit, action.payload.offset, action.payload.pageID);
                    return this.inventoryService.getAllCars();
                }),
                map(inventory => {
                    return inventory.map(inventory => {
                        return { ...inventory, allCars: inventory ? inventory : [] };
                    });
                }),
                map(inventory => {
                    return new CarActions.SetCars(inventory);
                })
            ));

    fetchId = createEffect(() =>
        this.actions$
            .pipe(
                ofType<CarActions.FetchId>(CarActions.FETCH_ID),
                switchMap((action) => {
                    return this.inventoryService.getById(action.payload);
                }),
                map(inventory => {
                    return new CarActions.SetCar(inventory);
                })
            ));

    fetchTrucks = createEffect(() =>
        this.actions$
            .pipe(
                ofType(CarActions.FETCH_TRUCKS),
                switchMap(() => {
                    return this.inventoryService.getTrucks();
                }),
                map(inventory => {
                    return inventory.map(inventory => {
                        return { ...inventory, allCars: inventory ? inventory : [] };
                    });
                }),
                map(inventory => {
                    return new CarActions.SetCars(inventory);
                })
            ));

    fetchSuvs = createEffect(() =>
        this.actions$
            .pipe(
                ofType(CarActions.FETCH_SUVS),
                switchMap(() => {
                    return this.inventoryService.getSuvs();
                }),
                map(inventory => {
                    return inventory.map(inventory => {
                        return { ...inventory, allCars: inventory ? inventory : [] };
                    });
                }),
                map(inventory => {
                    return new CarActions.SetCars(inventory);
                })
            ));

    fetchSedans = createEffect(() =>
        this.actions$
            .pipe(
                ofType(CarActions.FETCH_SEDANS),
                switchMap(() => {
                    return this.inventoryService.getSedans();
                }),
                map(inventory => {
                    return inventory.map(inventory => {
                        return { ...inventory, allCars: inventory ? inventory : [] };
                    });
                }),
                map(inventory => {
                    return new CarActions.SetCars(inventory);
                })
            ));


    constructor(
        private actions$: ActionsSubject,
        private http: HttpClient,
        private inventoryService: InventoryService,
        private store: Store<fromApp.AppState>
    ) { }
}