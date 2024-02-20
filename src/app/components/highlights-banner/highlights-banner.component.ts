import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { CommonModule } from '@angular/common';
import { BannerSlideComponent } from '../banner-slide/banner-slide.component';
@Component({
  selector: 'app-highlights-banner',
  standalone: true,
  imports: [CommonModule, BannerSlideComponent],
  templateUrl: './highlights-banner.component.html',
  styleUrl: './highlights-banner.component.scss',
})
export class HighlightsBannerComponent {
  constructor(private content: ContentService) {}
  slides: {
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
  next: number = 0;
  getBannerContent() {
    this.content.banner().subscribe({
      next: (res) => {
        this.slides = res.slides.sort(function (a: any, b: any) {
          let x = a.order;
          let y = b.order;

          // Compare the 2 dates
          if (x < y) return -1;
          if (x > y) return 1;
          return 0;
        });
        console.log(this.slides);
      },
      error: (err) => console.log(err),
    });
  }
  nextSlide(index: number) {
    if (index < this.slides.length - 1) {
      index++;
    } else {
      index = 0;
    }
    this.next = index;
    console.log(this.next);
  }
  ngOnInit() {
    this.getBannerContent();
  }
}
