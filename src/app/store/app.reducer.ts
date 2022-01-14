import { ActionReducerMap } from '@ngrx/store';
import * as fromCarList from '../inventory/store/inventory.reducer';

export interface AppState {
    allCars: fromCarList.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    allCars: fromCarList.inventoryReducer
};