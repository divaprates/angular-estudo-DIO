import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { BigCardComponent } from './big-card/big-card.component';
import { ButtonComponent } from './button/button.components';
import { CardComponent } from './card/card.component';
import { CheckComponent } from './check/check.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    HeaderComponent,
    MenuComponent,
    CardComponent,
    CheckComponent,
    BigCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    MenuComponent,
    HeaderComponent,
    BigCardComponent
  ]
})
export class ComponentsModule { }
