import { Component, OnInit } from '@angular/core';
import { ProductsData } from 'src/app/models/products-data.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private servcPrd: ProductsService) { }

  listedProducts :ProductsData[]=[];

  ngOnInit(): void {
    this.servcPrd.getProducts().subscribe(res => {
      this.listedProducts = res; });
  }
}
