import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailService } from '../services/OrderDetail.service'; // Asegúrate de que el nombre del archivo y la ruta sean correctos
import { BuyOrdersService } from '../services/BuyOrders.service'; // Asegúrate de que el nombre del archivo y la ruta sean correctos

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Asegúrate de que el nombre de la propiedad sea "styleUrls" y no "styleUrl"
})
export class ProfileComponent implements OnInit {

  orderDetailList: any[] = [];
  orderBuyList: any[] = [];

  constructor(
    private orderDetailService: OrderDetailService,
    private BuyOrdersService: BuyOrdersService
  ) { }

  ngOnInit(): void {
   this.cargarDatosOrderBuy()
  }

  cargarDatosOrderDetail(): void {
    this.orderDetailService.showOrderDetail().subscribe({
      next: (product) => {
        this.orderDetailList = product;
        console.log(this.orderDetailList);
      },
      error: (err) => {
        console.error('Error cargando los detalles de los pedidos: ', err);
      }
    });
  }

  cargarDatosOrderBuy(): void {
    this.BuyOrdersService.showOrderBuy().subscribe({
      next: (product) => {
        this.orderBuyList = product;
        console.log(product);
      },
      error: (err) => {
        console.error('Error cargando los detalles de los pedidos: ', err);
      }
    });
  }
}
