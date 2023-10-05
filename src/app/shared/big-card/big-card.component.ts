import { Component, Input, OnInit } from '@angular/core';
import { Expresso } from 'src/app/model/expresso';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit{

  @Input()
  public expresso!: Expresso;

  favorito: boolean = false;
  
  ngOnInit(): void {}

  favoritar() {
    this.favorito ? this.favorito = false : this.favorito = true;
  }

}
