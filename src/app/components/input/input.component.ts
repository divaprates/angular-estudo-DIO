import { Component } from '@angular/core';

@Component({
  selector: 'my-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  textLabel: string = 'Digite algo:';
  placeholder:string = ''
}
