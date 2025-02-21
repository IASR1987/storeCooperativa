import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailService } from '../services/OrderDetail.service'; // Asegúrate de que el nombre del archivo y la ruta sean correctos
import { BuyOrdersService } from '../services/BuyOrders.service'; // Asegúrate de que el nombre del archivo y la ruta sean correctos
import { Order } from '../models/order.model'; // Importa la interfaz Order desde el archivo correcto

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'] // Asegúrate de que el nombre de la propiedad sea "styleUrls" y no "styleUrl"
})
export class ProfileComponent implements OnInit {

  orderDetailList: any[] = [];
  orderBuyList: Order[] = [];
  newDate: string = '';
  newDates: any[] = [];
  contador: number = 0;
  orderModalList: any[] = [];
  productDetailList: any[] = [];


  constructor(
    private orderDetailService: OrderDetailService,
    private BuyOrdersService: BuyOrdersService,
  ) { }

  ngOnInit(): void {
    this.cargarDatosOrderBuy()
  }

  cargarDatosOrderBuy(): void {
    this.BuyOrdersService.showOrderBuy().subscribe({
      next: (product: Order[]) => {
        this.orderBuyList = product;
        console.log('Datos de los pedidos: ', this.orderBuyList);
      },
      error: (err) => {
        console.error('Error cargando los detalles de los pedidos: ', err);
      }
    });
  }
}

