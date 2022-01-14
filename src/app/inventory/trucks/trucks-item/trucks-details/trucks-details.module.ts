import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { TrucksResolverService } from "src/app/inventory/resolvers/trucks-resolver.service";
import { TrucksDetailsComponent } from "./trucks-details.component";

@NgModule({
    declarations: [
        TrucksDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        RouterModule.forChild([
            { path: ':id', component: TrucksDetailsComponent, resolve: [TrucksResolverService] }
        ])
    ]
})
export class TrucksDetailsModule { }