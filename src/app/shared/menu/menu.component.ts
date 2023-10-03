import { Component, OnInit } from '@angular/core';

interface ItemMenu {
  href: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public items: ItemMenu[] = [];
  
  constructor() {}

  ngOnInit(): void {
    this.carregarMenu();
  }

  carregarMenu () {
    this.items = [
      {href: '/', text: 'Home'},
      {href: '/cardapio', text: 'Cardápio'},
      {href: '/quem-somos', text: 'Quem somos'},
      {href: '/contato', text: 'Contato'},
    ]
  }
}
