import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'popup',
        loadChildren: () => import('./pages/popup/popup.module').then(m => m.PopupModule)
    },
    {
        path: 'tab',
        loadChildren: () => import('./pages/tab/tab.module').then(m => m.TabModule)
    },
    {
        path: 'options',
        loadChildren: () => import('./pages/options/options.module').then(m => m.OptionsModule)
    },
    {
        path: '',
        redirectTo: '/popup',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
