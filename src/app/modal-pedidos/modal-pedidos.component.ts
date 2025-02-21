import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CarShopService } from '../services/CarShop.service'; // Asegúrate de que la ruta sea correcta
import { FormsModule } from '@angular/forms';//select del modal

@Component({
  selector: 'app-modal-product',
  standalone: true,
  templateUrl: './modal-pedidos.component.html',
  styleUrls: ['./modal-pedidos.component.css'],
  imports: [MatDialogModule, MatButtonModule,FormsModule]
})
export class ModalPedidosComponent {
  selectedQuantity: number = -1;
  constructor(
    private dialogRef: MatDialogRef<ModalPedidosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Recibe los datos pasados desde el componente padre,
    private carShopService: CarShopService 
  ) {
    console.log('Datos recibidos en el modal:', data);
  }
  
  addToCart(productId: number,quantity: number, name:string, imgSrc:string) {
    const userId = 1; // Suponemos que el usuario es el 1
    console.log('Agregando al carrito:', userId, productId, quantity, name, imgSrc);
    if(quantity == -1){
      alert("Seleccione una cantidad");
      this.dialogRef.close();
    }else{
      this.carShopService.addToCart(userId, productId, quantity,name, imgSrc).subscribe(response => {
      alert("Producto agregado al carrito");
      this.dialogRef.close();
    });
    }
    
  }

}

