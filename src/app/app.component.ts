import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header-component/header-component.component';
import { ProductTableComponentComponent } from './product-table-component/product-table-component.component';

@Component({
  selector: 'app-root',
  standalone: true, // El componente es independiente
  imports: [ CommonModule, HeaderComponent, ProductTableComponentComponent], // Agrega HeaderComponent a las importaciones
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'storeCooperativa';
}
