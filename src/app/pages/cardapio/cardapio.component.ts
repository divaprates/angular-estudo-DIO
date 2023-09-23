import { Component, OnInit } from '@angular/core';
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
    this.expressoList = [
      {
        titulo: 'Expresso',
        valor: 10.23,
        descricao: 'Café preto',
        imagem: 'https://revistasaboresdosul.com.br/wp-content/uploads/2020/12/cafe-expresso-1.jpg',
      },
      {
        titulo: 'Americano',
        valor: 10.23,
        descricao: 'Café fraco',
        imagem: 'https://reviewcafe.com.br/wp-content/uploads/2022/01/cafe-long-black.jpg',
      },
      {
        titulo: 'Macchiatto',
        valor: 12.23,
        descricao: 'Café com chantily',
        imagem: 'https://www.nespresso.com/ncp/res/uploads/recipes/espressomacchiato2BR.jpg',
      },
      {
        titulo: 'Mocha',
        valor: 12.23,
        descricao: 'Café com chocolate, leite e chantily',
        imagem: 'https://assets.unileversolutions.com/recipes-v2/237868.jpg',
      },
      {
        titulo: 'Affogato',
        valor: 12.23,
        descricao: 'Café com sorvete',
        imagem: 'https://i.blogs.es/7fb3d0/affogato/1366_2000.jpg',
    },
      {
        titulo: 'Cappuccino',
        valor: 11.23,
        descricao: 'Café com leite vaporizado e espuma de leite',
        imagem: 'https://static.itdg.com.br/images/1200-630/0093b901a326651004710993d43fe086/cappuccino.jpg',
      },
      {
        titulo: 'Latte',
        valor: 11.23,
        descricao: 'Café com leite vaporizado',
        imagem: 'https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg',
      },
      {
        titulo: 'Café com Amaretto',
        valor: 14.23,
        descricao: 'Café com licor de Amaretto',
        imagem: 'https://media-cdn.tripadvisor.com/media/photo-s/07/a4/18/c0/cafe-brasilero.jpg',
      },
      {
        titulo: 'Café Irlandês',
        valor: 15.23,
        descricao: 'Café com wísque irlandês, chantily e açúcar mascavo',
        imagem: 'https://www.graogourmet.com/wp-content/uploads/2021/03/cafe_irlandes.png',
      },
      {
        titulo: 'Café com Rum',
        valor: 14.23,
        descricao: 'Café com rum, chantily e raspas de limão',
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/56/2022/08/16/rum-com-cafe-1660671484295_v2_846x846.jpg',
      },
      {
        titulo: 'Café Vienense',
        valor: 13.23,
        descricao: 'Café com creme de leite batido e raspas de chocolate',
        imagem: 'https://receitinhas.com.br/wp-content/uploads/2023/04/cafe-vienense.jpg',
      },
      {
        titulo: 'Café com Canela',
        valor: 11.23,
        descricao: 'Café com canela em pó e chantily',
        imagem: 'https://hubdocafe.cooxupe.com.br/wp-content/uploads/2021/12/coffee-gd32aef29d_1920.jpg',
      }
    ];

    console.log(this.expressoList)
  }

}
