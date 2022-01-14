import { Action } from "@ngrx/store";
import { Cars } from "../cars.model";


export const SET_CARS = '[Cars] Set Cars';
export const FETCH_CARS = '[Cars] Fetch Cars';
export const SET_CAR = '[Cars] Fetch Car';
export const FETCH_TRUCKS = '[Cars] Fetch Trucks';
export const FETCH_SUVS = '[Cars] Fetch SUVs';
export const FETCH_SEDANS = '[Cars] Fetch Sedans';
export const FETCH_ID = '[Cars] Fetch Id';

export class SetCars implements Action {
    readonly type = SET_CARS;

    constructor(public payload: Cars[]) { }
}

export class SetCar implements Action {
    readonly type = SET_CAR;

    constructor(public payload: Cars) { }
}

export class FetchCars implements Action {
    readonly type = FETCH_CARS;

    //constructor(public payload: { limit: number, offset: number, pageID: number }) { }
}

export class FetchTrucks implements Action {
    readonly type = FETCH_TRUCKS;
}

export class FetchSuvs implements Action {
    readonly type = FETCH_SUVS;
}

export class FetchSedans implements Action {
    readonly type = FETCH_SEDANS;
}

export class FetchId implements Action {
    readonly type = FETCH_ID;

    constructor(public payload: number) { }
}

export type InventoryAction =
    | SetCars
    | FetchCars
    | FetchTrucks
    | FetchSuvs
    | FetchSedans
    | FetchId;