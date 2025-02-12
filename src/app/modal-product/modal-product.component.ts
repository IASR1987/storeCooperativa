import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CarShopService } from '../services/CarShop.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-modal-product',
  standalone: true,
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.css'],
  imports: [MatDialogModule, MatButtonModule]  // Importamos módulos necesarios aquí
})
export class ModalProductComponent {
  constructor(
    private dialogRef: MatDialogRef<ModalProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe los datos pasados desde el componente padre,
    private carShopService: CarShopService 
  ) {
    console.log('Datos recibidos en el modal:', data);  // Verifica que los datos lleguen bien
  }

  addToCart(productId: number) {
    const userId = 1;
    const quantity = 1;

    this.carShopService.addToCart(userId, productId, quantity).subscribe(response => {
      console.log('Producto agregado al carrito:', response);
    });
  }

}

