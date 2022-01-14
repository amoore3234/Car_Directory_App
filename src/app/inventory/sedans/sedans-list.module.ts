import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { SedansItemComponent } from "./sedans-item/sedans-item.component";
import { SedansListComponent } from "./sedans-list.component";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        SedansListComponent,
        SedansItemComponent
    ],
    imports: [
        CommonModule,
        NgxPaginationModule,
        FormsModule,
        MatCardModule,
        MatToolbarModule,
        MatButtonModule,
        FlexLayoutModule,
        RouterModule.forChild([
            { path: '', component: SedansListComponent }
        ])
    ]
})
export class SedansListModule { }