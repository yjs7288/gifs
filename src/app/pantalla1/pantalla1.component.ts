import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantalla1',
  templateUrl: './pantalla1.component.html',
  styleUrls: ['./pantalla1.component.css']
})
export class Pantalla1Component implements OnInit {

  constructor() { }
  termo: string;

  ngOnInit(): void {
  }
pantalla1(form){
  location.href = '/resultados/${form.vale.termo}';
 }
}
