
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ProductsService } from '../services/Products.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalProductComponent } from '../modal-product/modal-product.component'; // Asegúrate de que la ruta sea correcta
import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectorRef } from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";

@Component({
    selector: 'app-product-table-component',
    standalone: true,
    imports: [CommonModule, SliderComponent, MatButtonModule, ProfileComponent],
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
        private dialog: MatDialog,
        private cdr: ChangeDetectorRef   
    ) {}


    ngOnInit(): void{
        this.cargarDatos();
        this.cargarProductos();
    }

    cargarDatos(): void {
        console.log("Cargando datos");
        this.productService.getDatos().subscribe({
            next: (product) => {
                console.log(product);
                this.catalog = product
            }
        });
    }

    cargarProductos(): void {
        if (!this.catalog || this.catalog.length === 0) {
            console.log("El catálogo aún no está cargado. Esperando 1 segundos...");
            setTimeout(() => {
                console.log("Reintentando cargar productos...");
                this.cargarProductos(); // Vuelve a llamar a la función después de 2 segundos
            }, 1000);
        }
        console.log("Cargando productos");
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
            this.cdr.detectChanges(); //fuerza actualizacion vista
        }
    }

    openModal(productId: number) {
        // Verificamos que el primer producto tenga los datos esperados
        const product = this.catalog[productId-1];
        console.log("Limoner"+product.id);
        if (product.name && product.description && product.price) {
            this.dialog.open(ModalProductComponent, {
                width: '75%',
                data: {
                image: product.imgSrc,
                name: product.name,
                description: product.description,
                price: product.price,
                id: product.id
                }
            });
        } else {
            console.error('Error: El producto no tiene los datos completos.');
        }
    }

    ngOnDestroy(): void {
        console.log("Componente destruido");
    }
}
