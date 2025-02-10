
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { ProductsService } from '../services/Products.service';

@Component({
    selector: 'app-product-table-component',
    imports: [CommonModule, SliderComponent],
    templateUrl: './product-table-component.component.html',
    styleUrl: './product-table-component.component.css'
})

export class ProductTableComponentComponent {

    catalog: any[] = [];
    productSG: any[] = [];
    productG: any[] = [];
    productE: any[] = [];
    productP: any[] = [];
    
    constructor(private productService: ProductsService) {}


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
        console.log(this.catalog);
        
    }

    cargarProductos(): void {
        for (let product of this.catalog) {
            console.log(product.serie);
            if(product.serie === "Sierra de Guadalcanal"){
                this.productSG.push(product);
                console.log("hola");
            }else if(product.serie === "Guadalimón"){
                this.productG.push(product);
            }else if(product.serie === "Ecológico"){
                this.productE.push(product);
            } else if(product.serie === "Premium"){
                this.productP.push(product);
            }
        }
    }
    /*
    // Array con los Productos
    productSG = [
        { name: 'AOVE Sierra de Guadalcanal 5 Litros', serie: 'Sierra de Guadalcanal', imgSrc: 'assets/5L_SG.png', price: '39€'},
        { name: 'AOVE Sierra de Guadalcanal 2 Litros', serie: 'Sierra de Guadalcanal', imgSrc: 'assets/2L_SG.png', price: '16,25€'},
        { name: 'AOVE Sierra de Guadalcanal 1 Litros', serie: 'Sierra de Guadalcanal', imgSrc: 'assets/1L_SG.png', price: '8,5€'},
        { name: 'AOVE Sierra de Guadalcanal 0,5 Litros', serie: 'Sierra de Guadalcanal', imgSrc: 'assets/0.5L_SG.png', price: '5€'},
        //{ name: 'Jarra de 500 ml', attack: 'Sierra de Guadalcanal', imgSrc: 'assets/0.5_J_L_SG.png'},
        //{ name: 'Botella de 250 ml', attack: 'Sierra de Guadalcanal', imgSrc: 'assets/0.25_L_SG.png'},
       //{ name: 'Sobre-Monodosis', attack: 'Sierra de Guadalcanal', imgSrc: 'assets/sobreMonodosis.png'},
    ];
    productG = [
        { name: 'Lata de 2.5 litros', serie: 'Guadalimón', imgSrc: 'assets/2.5L_G.png',price: "50€"},
        { name: 'Botella de 500 ml', serie: 'Guadalimón', imgSrc: 'assets/0.5L_G.png',price: "50€"},
        //{ name: 'Botella de 250 ml', attack: 'Guadalimon', imgSrc: 'assets/0.25L_G.png'},
        //{ name: 'Botella de 100 ml', attack: 'Guadalimon', imgSrc: 'assets/0.1L_G.png'},
    ];
    productE = [
        { name: 'Botella de 2 litros', serie: 'Ecológico', imgSrc: 'assets/2L_E.png',price: "50€"},
        { name: 'Botella de 500 ml', serie: 'Ecológico', imgSrc: 'assets/0.5L_E.png',price: "50€"},
    ];
    productP= [
        { name: 'Botella de 2 litros', serie: 'Premium', imgSrc: 'assets/2L_E.png',price: "50€"},
        { name: 'Botella de 500 ml', serie: 'Premium', imgSrc: 'assets/0.5L_E.png',price: "50€"},
    ];/*
    //productR= [
       // { name: 'Botella de 2 litros', attack: 'Regalo', imgSrc: 'assets/2L_E.png'},
       // { name: 'Botella de 500 ml', attack: 'Regalo', imgSrc: 'assets/0.5L_E.png'},
    //];

        */
    // Método para manejar el clic en un Pokémon
    onSelectProduct(product: any) {
        if (product.isVisible) {
            alert(`Te compro ${product.name}`);    
        }

        console.log(product);
        }

    
}