import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { InventoryRoutingModule } from "./inventory-routing.module";
import { InventoryComponent } from "../inventory.component";
import { InventoryListComponent } from './inventory-list.component';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        InventoryComponent,
        InventoryListComponent,
        InventoryItemComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        RouterModule,
        InventoryRoutingModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule
    ]
})
export class InventoryModule { }