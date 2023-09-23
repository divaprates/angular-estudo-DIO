import { Component, OnInit } from '@angular/core';
import { quemSomos } from '../util/textoUtil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public quemSomos?: string[] = quemSomos;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}
