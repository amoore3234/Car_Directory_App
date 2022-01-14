import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { SedansResolverService } from "src/app/inventory/resolvers/sedans-resolver.service";
import { SuvsResolverService } from "src/app/inventory/resolvers/suvs-resolver.service";
import { SuvsDetailsComponent } from "./suvs-details.component";

@NgModule({
    declarations: [
        SuvsDetailsComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        RouterModule.forChild([
            { path: ':id', component: SuvsDetailsComponent, resolve: [SuvsResolverService] }
        ])
    ]
})
export class SuvsDetailsModule { }