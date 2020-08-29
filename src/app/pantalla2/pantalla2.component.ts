import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import{ServicioService} from '../servicio.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-pantalla2',
  templateUrl: './pantalla2.component.html',
  styleUrls: ['./pantalla2.component.css']
})
export class Pantalla2Component implements OnInit {

  constructor(private route: ActivatedRoute, private servicioservice: ServicioService) { }
  q: string;
  pantalla2: any = [];
  ngOnInit(): void {
    this.route.params.subscribe (params =>
    {
      this.q = params ['q'];

    this.servicioservice.getpantalla2(this.q).subscribe(pantalla2 => {
      console.log(pantalla2);
      this.pantalla2 = pantalla2;
    });
    });
  }

}
