import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { InventoryResolverService } from "src/app/inventory/resolvers/inventory-resolver.service";
import { InventoryDetailsComponent } from "./inventory-details.component";

@NgModule({
    declarations: [
        InventoryDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        RouterModule.forChild([
            { path: ':id', component: InventoryDetailsComponent, resolve: [InventoryResolverService] }
        ])
    ]
})
export class InventoryDetailsModule { }