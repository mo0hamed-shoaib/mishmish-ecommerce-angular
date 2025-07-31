import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { ProductComponent } from '../product/product.component';
import { ProductsService } from '../services/products.service';
import { Product } from '../product';
import { SlicePipe } from '@angular/common';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, SlicePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  productTitle = 'Toshiba';
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategoryId: number | null = null;
  loading = true;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Listen to query parameter changes for category filtering
    this.route.queryParams
      .pipe(
        switchMap((params) => {
          this.selectedCategoryId = params['category']
            ? +params['category']
            : null;
          return this.productsService.getProducts();
        })
      )
      .subscribe({
        next: (data) => {
          this.products = data;
          this.filterProducts();
          this.loading = false;
          console.log('Fetched products:', this.products.length);
          console.log('Filtered products:', this.filteredProducts.length);
        },
        error: (error) => {
          console.error('Error fetching products:', error);
          this.loading = false;
        },
      });
  }

  filterProducts(): void {
    if (this.selectedCategoryId) {
      this.filteredProducts = this.products.filter(
        (product) => product.category?.id === this.selectedCategoryId
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  displayMessage(value: string) {
    console.log(value);
  }
}
