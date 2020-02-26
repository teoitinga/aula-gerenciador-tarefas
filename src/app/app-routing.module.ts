import { TarefaRoutes } from './tarefas';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/tarefas/listar',
        pathMatch: 'full'
    },
    ...TarefaRoutes
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}