import { Component } from '@angular/core';
import { PartidosService } from './partidos.service';


@Component({
  selector: 'root-component',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola 2ºDAM';
  datos: any[] = [];  

  constructor(private partidosService: PartidosService) {}

  ngOnInit(){
    
    this.cargarDatos(); 
  }

  cargarDatos(): void {
    this.partidosService.getDatos().subscribe({
      next: (partidos) => {
        this.datos = partidos
    
      }
    });}

}
