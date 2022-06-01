import { Component, OnInit } from '@angular/core';
import { ProductsData } from 'src/app/models/products-data.interface';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(private servcPrd: ProductsService) { }
  
   listedProducts :ProductsData[]=[];
   pushItemtoCart(prod : any) {
    this.servcPrd.pushItemstoCart(prod);
    this.servcPrd.setItemsForCart(prod);
  }
  
  ngOnInit(): void {
    this.servcPrd.getProducts().subscribe(res => {
      this.listedProducts = res; });
  }


 
  
}
