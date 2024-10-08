import {Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductRowComponent } from '../product-row/product-row.component';

@Component({
  selector: 'prodcts-list',
  standalone: true,
  imports: [ProductRowComponent],
  templateUrl: './prodct-list.component.html',
  styleUrl: './prodct-list.component.css'
})
export class ProdctListComponent {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter(); 
  }

  clicked(products: Product): void {
    this.currentProduct = products;
    this.onProductSelected.emit(products);
  }

  isSelected(products: Product): boolean {
    if (!products || !this.currentProduct) {
      return false;
    }
    return products.sku === this.currentProduct.sku;
  }
}
