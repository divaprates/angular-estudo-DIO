import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ButtonComponent,
    CardComponent,
    MenuComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
