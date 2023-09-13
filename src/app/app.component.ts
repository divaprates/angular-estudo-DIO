import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'angular-estudo-dio';
  textClick: string = 'clique aqui';
  textClear: string = 'limpar';


}
