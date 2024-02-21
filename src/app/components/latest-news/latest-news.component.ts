import { Component } from '@angular/core';
import { ContentService } from '../../services/content.service';
import { Category, News } from '../../interfaces/news';
import { CommonModule } from '@angular/common';
import { NewsCardComponent } from '../news-card/news-card.component';

type TobjectCategory = { [id: number]: string };
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
  originalNews: News[] = [];
  allNews: News[] = [];
  allCategories: Category[] = [];
  category: TobjectCategory = {};
  getAllNews() {
    this.content.allNews().subscribe({
      next: (res) => {
        this.allNews = res.News;
        this.allNews = this.allNews.map((news) => {
          return {
            ...news,
            categoryName: this.category[+news.categoryID as number],
          };
        });
        this.addToHomeNews = this.allNews.filter(
          (news) => news.showOnHomepage === 'yes'
        );
        this.originalNews = this.addToHomeNews;
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
        this.category = res.newsCategory.reduce(
          (acc: TobjectCategory, current: Category) => {
            acc[current.id] = current.name;
            return acc;
          },
          {}
        );
        this.getAllNews();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getNewsByCategory(category: string) {
    const categorizedNews = this.originalNews.filter(
      (news) => news.categoryName === category
    );
    this.addToHomeNews = categorizedNews;
  }

  ngOnInit() {
    this.getAllCategories();
  }
}
