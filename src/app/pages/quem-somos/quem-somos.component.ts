import { Component } from '@angular/core';
import { quemSomos } from 'src/app/util/textoUtil';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.scss']
})
export class QuemSomosComponent {

  public quemSomos?: string[] = quemSomos;

}
