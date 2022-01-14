import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { SedansResolverService } from "src/app/inventory/resolvers/sedans-resolver.service";
import { SedansDetailsComponent } from "./sedans-details.component";

@NgModule({
    declarations: [
        SedansDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        RouterModule.forChild([
            { path: ':id', component: SedansDetailsComponent, resolve: [SedansResolverService] }
        ])
    ]
})
export class SedansDetailsModule { }