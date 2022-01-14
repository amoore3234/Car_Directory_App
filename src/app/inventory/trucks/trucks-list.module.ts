import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NgxPaginationModule } from "ngx-pagination";
import { TrucksListComponent } from "./trucks-list.component";
import { TrucksItemComponent } from './trucks-item/trucks-item.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TrucksListComponent,
        TrucksItemComponent
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
            { path: '', component: TrucksListComponent }
        ])
    ]
})
export class TrucksListModule { }