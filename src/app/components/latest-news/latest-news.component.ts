import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Category, News } from '../../interfaces/news';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule, NewsCardComponent],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  constructor(private content: ContentService) {}
  addToHomeNews: News[] = [];
  allNews: News[] = [];
  allCategories: Category[] = [];
  getAllNews() {
    this.content.allNews().subscribe({
      next: (res) => {
        console.log(res);
        this.allNews = res.News;
        this.addToHomeNews = this.allNews.filter(
          (news) => news.showOnHomepage === 'yes'
        );
        console.log('homeNews', this.addToHomeNews);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getAllCategories() {
    this.content.allCategories().subscribe({
      next: (res) => {
        this.allCategories = res.newsCategory;

        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit() {
    this.getAllNews();
    this.getAllCategories();
  }
}
