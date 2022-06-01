import { Component, OnInit } from '@angular/core';
import { ProductsData } from 'src/app/models/products-data.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  constructor(private servcPrd: ProductsService) { }
  listeditems :any=[];
  ngOnInit(): void {
    this.servcPrd.getItemsForCart().subscribe(res=>(this.listeditems=res))
  }

}
