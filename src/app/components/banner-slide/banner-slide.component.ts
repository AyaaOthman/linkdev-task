import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-slide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-slide.component.html',
  styleUrl: './banner-slide.component.scss',
})
export class BannerSlideComponent {
  @Input() next: number = 0;
  @Input() slides: {
    id: number;
    brief: string;
    order: number;
    title: string;
    imgUrl: string;
    itemUrl: string;
    category: string;
    videoUrl: string;
    colorCode: string;
  }[] = [];
  getSlide(n: number) {
    this.next = n;
    console.log(this.next);
  }
}
