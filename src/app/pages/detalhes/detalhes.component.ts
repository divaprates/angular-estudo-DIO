import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpressoData } from 'src/app/dataFake/ExpressoData';
import { Expresso } from 'src/app/model/expresso';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  id: string = '0';
  expresso!: Expresso;

  constructor(
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      this.id = value['id'];
      this.expresso = ExpressoData.filter(e => e.id == this.id)[0];
    })
  }
}
