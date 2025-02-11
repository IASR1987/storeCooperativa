import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
    @Inject(MAT_DIALOG_DATA) public data: any // Recibe los datos pasados desde el componente padre
  ) {
    console.log('Datos recibidos en el modal:', data);  // Verifica que los datos lleguen bien
  }
}

