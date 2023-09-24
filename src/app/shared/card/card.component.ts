import { Component, Input, OnInit } from '@angular/core';
import { Expresso } from 'src/app/model/expresso';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  
  @Input()
  public expresso!: Expresso;

  favorito: boolean = false;
  
  ngOnInit(): void {
    console.log(this.expresso)
  }

  favoritar() {
    this.favorito ? this.favorito = false : this.favorito = true;
  }
}
