import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './pages/cardapio/cardapio.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { QuemSomosComponent } from './pages/quem-somos/quem-somos.component';

const routes: Routes = [
  {
    path: '',
    component: CardapioComponent,
    pathMatch: 'full'
  },
  {
    path: 'cardapio',
    component: CardapioComponent
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'detalhes/:id',
    component: DetalhesComponent
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
