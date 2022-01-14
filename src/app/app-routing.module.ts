import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
    { path: '', redirectTo: '/cars', pathMatch: 'full' },
    { path: 'cars', loadChildren: () => import('./inventory/inventory-list/inventory.module').then(m => m.InventoryModule) },
    { path: 'trucks', loadChildren: () => import('./inventory/trucks/trucks-list.module').then(m => m.TrucksListModule) },
    { path: 'suvs', loadChildren: () => import('./inventory/suvs/suvs-list.module').then(m => m.SuvsModule) },
    { path: 'sedans', loadChildren: () => import('./inventory/sedans/sedans-list.module').then(m => m.SedansListModule) },
    { path: 'details', loadChildren: () => import('./inventory/inventory-list/inventory-item/inventory-details/inventory-details.module').then(m => m.InventoryDetailsModule) },
    { path: 'sedans-details', loadChildren: () => import('./inventory/sedans/sedans-item/sedans-details/sedans-details.module').then(m => m.SedansDetailsModule) },
    { path: 'suvs-details', loadChildren: () => import('./inventory/suvs/suvs-item/suvs-details/suvs-details.module').then(m => m.SuvsDetailsModule) },
    { path: 'trucks-details', loadChildren: () => import('./inventory/trucks/trucks-item/trucks-details/trucks-details.module').then(m => m.TrucksDetailsModule) },
    { path: '**', loadChildren: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }