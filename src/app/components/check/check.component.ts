import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss']
})
export class CheckComponent
  implements  OnInit,
              OnChanges,
              DoCheck,
              AfterContentChecked,
              AfterContentInit,
              AfterViewChecked,
              AfterViewInit,
              OnDestroy
{

  public quantidade: number = 0;

  switch = "one";

  constructor() {
    console.log('Construtor');
  }
  
  // checked -> content -> view
  
  
  // quando o primeiro conteudo é iniciado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  
  // depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  
  // após alguma alteração, verifica o conteúdo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  
  // após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  
  ngOnInit(): void {
    console.log("ng On Init");
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng On Changes");
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  
  adicionar() {
    this.quantidade++;
  }
  decrementar() {
    this.quantidade--;
  }

}
