import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from '../product';
import { switchMap, catchError, of } from 'rxjs';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
  providers: [ProductsService],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  loading = true;
  error = false;
  selectedImageIndex = 0;
  quantity = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          const productId = +params['id'];
          return this.productsService.getProducts().pipe(
            switchMap((products) => {
              const product = products.find((p) => p.id === productId);
              return product ? of(product) : of(null);
            })
          );
        }),
        catchError(() => {
          this.error = true;
          this.loading = false;
          return of(null);
        })
      )
      .subscribe((product) => {
        this.product = product;
        this.loading = false;
        if (!product) {
          this.error = true;
        }
      });
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(): void {
    if (this.product) {
      console.log(`Added ${this.quantity} of ${this.product.title} to cart`);
      // TODO: Implement cart functionality
    }
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
