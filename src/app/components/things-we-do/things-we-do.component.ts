import { Component } from '@angular/core';
import { ProductsCardComponent } from '../products-card/products-card.component';

@Component({
  selector: 'app-things-we-do',
  standalone: true,
  imports: [ProductsCardComponent],
  templateUrl: './things-we-do.component.html',
  styleUrl: './things-we-do.component.scss',
})
export class ThingsWeDoComponent {}
