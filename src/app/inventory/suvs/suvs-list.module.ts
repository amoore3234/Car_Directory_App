import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { SuvsListComponent } from "./suvs-list.component";
import { SuvsItemComponent } from './suvs-item/suvs-item.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        SuvsListComponent,
        SuvsItemComponent
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
            { path: '', component: SuvsListComponent }
        ])
    ]
})
export class SuvsModule { }