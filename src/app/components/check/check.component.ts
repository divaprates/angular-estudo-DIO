import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

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
              AfterViewInit
{


  constructor() {
    console.log('Construtor');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  
  ngOnInit(): void {
    console.log("ng On Init");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng On Changes");
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

}
