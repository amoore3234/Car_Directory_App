import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { map, switchMap, take } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Cars } from "../cars.model";

import * as fromApp from "../../store/app.reducer";
import * as InventoryActions from "../store/inventory.actions";
import { Store } from "@ngrx/store";
import { Actions, ofType } from "@ngrx/effects";

@Injectable({ providedIn: 'root' })
export class SedansResolverService implements Resolve<Cars[]> {

    constructor(
        private store: Store<fromApp.AppState>,
        private actions$: Actions) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any[] | Observable<any[]> | Promise<any[]> {
        this.store.dispatch(new InventoryActions.FetchSedans());
        return this.actions$.pipe(
            ofType(InventoryActions.SET_CARS),
            take(1)
        );
    }

}