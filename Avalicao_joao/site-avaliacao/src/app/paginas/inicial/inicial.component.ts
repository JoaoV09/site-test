import { Component, OnInit } from '@angular/core';
import { OrderSiteService } from 'src/app/serviço/order-site.service';

OrderSiteService

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})

export class InicialComponent implements OnInit{
  constructor (private service: OrderSiteService) {}

  itens: any;

  ngOnInit(): void {
    this.itens = this.service.varDetails;
  }

}
