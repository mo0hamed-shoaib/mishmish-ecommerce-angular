import { Component, EventEmitter, input, output, Output } from '@angular/core';
import { User } from '../user';
import { Product } from '../product';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-product',
  imports: [RouterLink, CurrencyPipe, TruncatePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  // @Input() title!:string
  title = input<string>();

  // @Output() sendMessage: EventEmitter<string> = new EventEmitter()
  sendMessage = output<string>();

  product = input<Product>();

  sayHi() {
    console.log('Hello');
    this.sendMessage.emit('Hello');
  }
}
