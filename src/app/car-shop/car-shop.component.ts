import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarShopService } from '../services/CarShop.service';
import { BuyOrdersService } from '../services/BuyOrders.service';
import { OrderDetailService } from '../services/OrderDetail.service';

@Component({
  selector: 'app-car-shop',
  imports: [CommonModule],
  templateUrl: './car-shop.component.html',
  styleUrl: './car-shop.component.css'
})
export class CarShopComponent {

  buyList : any[]= [];
  total: number = 0;
  totalQuantity: number = 0;
  newTotalQuantity: number = 0;

  constructor(
    private carShopService: CarShopService,
    private buyOrdersService: BuyOrdersService,
    private orderDetailService : OrderDetailService
  ) {}


  ngOnInit(){
    this.cargarDatosCarrito(1);
  }

  cargarDatosCarrito(idUser:number): void {
    idUser=1;

    this.carShopService.getDatos().subscribe({ //pasamos por parametro id de usuario
      next: (product) => {
        this.buyList = product
        this.calcularTotal();
        this.calcularTotalQuantity();
      }
    });
    console.log(this.buyList);
  }

  calcularTotal(): number {
    this.total = this.buyList.reduce((acc, producto) => acc + (producto.price * producto.quantity), 0);
    return this.total;
  }
  calcularTotalQuantity(): number {
    this.totalQuantity = this.buyList.reduce((acc, producto) => acc + (producto.quantity), 0);
    return this.totalQuantity;
  }

  borrarProducto(idRemove: number): void {
      console.log("id del producto: " + idRemove);

      // Filtrar correctamente la lista para eliminar el producto con el id dado
      this.buyList = this.buyList.filter(item => item.id !== idRemove);

      this.carShopService.deleteProduct(idRemove).subscribe({    
        next: () => {
          this.cargarDatosCarrito(1);
        }
      });
      //Reiniciamos cantidad y precio
      this.calcularTotal()
      this.calcularTotalQuantity()
      console.log("Producto Borrado");
    }

    addOrderBuy(): void {
      console.log("Precio total: " + this.total);
      // Llamada al servicio para añadir la orden de compra
      this.buyOrdersService.addOrderBuy(this.total).subscribe({
        next: () => {
          console.log("Compra realizada");
          alert("Compra realizada");
          

           //AQUI DEBEMOS GUARDAR EN ORDERREATIL
           for (const product of this.buyList) {
            console.log("Recorremos lista productos");
            console.log("idProduct: " + product.productId + " quantity: " + product.quantity + " price: " + product.price);
            this.orderDetailService.addOrderDetail(product.productId, product.quantity, product.price).subscribe({
              next: () => {
                console.log("Producto añadido a OrderDetail");
              }  
              });
          };

          // Vaciar el carrito después de realizar la compra
          this.buyList = [];
          console.log("Carrito vaciado");
          this.carShopService.deleteAllProductsByIdUser(1).subscribe({
            next: () => {
              console.log("Productos eliminados del carrito remoto");
            }
          });

        setTimeout(() => {
          this.cargarDatosCarrito(1);
          this.calcularTotal();
          this.calcularTotalQuantity();
        }, 1000);
        },
        error: (err) => {
          console.error("Error al realizar la compra", err);
          alert("Hubo un problema al procesar la compra");
        }
      });

      
    }
    
}
