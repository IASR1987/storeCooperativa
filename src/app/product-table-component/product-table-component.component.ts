
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ProductsService } from '../services/Products.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalProductComponent } from '../modal-product/modal-product.component'; // Asegúrate de que la ruta sea correcta
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-product-table-component',
    standalone: true,
    imports: [CommonModule, SliderComponent,MatButtonModule],
    templateUrl: './product-table-component.component.html',
    styleUrl: './product-table-component.component.css'
})

export class ProductTableComponentComponent {

    catalog: any[] = [];
    productSG: any[] = [];
    productG: any[] = [];
    productE: any[] = [];
    productP: any[] = [];
    
    constructor(
        private productService: ProductsService,
        private dialog: MatDialog
        //private carShopService: CarShopService    
    ) {}


    ngOnInit(){
        this.cargarDatos();
        this.cargarProductos();
    }

    cargarDatos(): void {
        this.productService.getDatos().subscribe({
            next: (product) => {
                this.catalog = product
            }
        });
    }

    cargarProductos(): void {
        for (let product of this.catalog) {
            console.log(product.serie);
            if(product.serie === "Sierra de Guadalcanal"){
                this.productSG.push(product);
            }else if(product.serie === "Guadalimón"){
                this.productG.push(product);
            }else if(product.serie === "Ecológico"){
                this.productE.push(product);
            } else if(product.serie === "Premium"){
                this.productP.push(product);
            }
        }
    }

    openModal() {
        // Verificamos que el primer producto tenga los datos esperados
        const product = this.catalog[0];
        console.log(product.imgSrc);
        if (product.name && product.description && product.price) {
            this.dialog.open(ModalProductComponent, {
                
                data: {
                image: product.imgSrc,
                name: product.name,
                description: product.description,
                price: product.price
                }
            });
        } else {
            console.error('Error: El producto no tiene los datos completos.');
        }
    }

    /*openModal(index: number) {
        this.dialog.open(ModalProductComponent, {
          data: { index, product: this.catalog[index] } // Pasamos el índice y los datos del producto
        });
    }*/
}
