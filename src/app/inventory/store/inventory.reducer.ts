import { Cars } from "../cars.model";
import * as InventoryAction from "./inventory.actions";

export interface State {
    allCars: Cars[];
    id: number;
}

const initialState: State = {
    allCars: [],
    id: 0
}

export function inventoryReducer(state = initialState, action: InventoryAction.InventoryAction) {
    switch (action.type) {
        case InventoryAction.SET_CARS:
            return {
                ...state,
                allCars: [...action.payload]
            }
        case InventoryAction.FETCH_ID:
            return {
                ...state,
                id: action.payload
            }
        // case InventoryAction.FETCH_CARS:
        //     return {
        //         ...state,
        //         limit: action.payload.limit,
        //         offset: action.payload.offset,
        //         pageID: action.payload.pageID
        //     }
        default:
            return state;
    }
}