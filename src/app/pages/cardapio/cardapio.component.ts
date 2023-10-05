import { Component, OnInit } from '@angular/core';
import { ExpressoData } from 'src/app/dataFake/ExpressoData';
import { Expresso } from 'src/app/model/expresso';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {
  textClick: string = 'clique aqui';
  textClear: string = 'limpar';

  expressoList: Expresso[] = [];
  
  ngOnInit(): void {
    this.expressoList = ExpressoData;
  }

}
