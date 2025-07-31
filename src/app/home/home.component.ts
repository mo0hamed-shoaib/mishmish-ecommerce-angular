import {
  afterNextRender,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ProductsService } from '../services/products.service';
import { RouterLink } from '@angular/router';
import { ProductComponent } from '../product/product.component';
import { CategoriesComponent } from '../categories/categories.component';
import { Product } from '../product';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ProductComponent, CategoriesComponent, SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ProductsService],
})
export class HomeComponent implements OnInit {
  trendingProducts: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.loadTrendingProducts();
  }

  loadTrendingProducts(): void {
    this.productsService.getProducts().subscribe((products) => {
      // Get first 3 products as trending (you can modify this logic later)
      this.trendingProducts = products.slice(0, 3);
    });
  }
}
