import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../shared/components.module';
import { CardapioComponent } from './cardapio/cardapio.component';
import { HomeComponent } from './home/home.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { BoxDescriptionComponent } from './quem-somos/box-description/box-description.component';
import { ContatoComponent } from './contato/contato.component';
import { DetalhesComponent } from './detalhes/detalhes.component';



@NgModule({
  declarations: [
    HomeComponent,
    CardapioComponent,
    QuemSomosComponent,
    BoxDescriptionComponent,
    ContatoComponent,
    DetalhesComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent,
    CardapioComponent
  ]
})
export class PagesModule { }
