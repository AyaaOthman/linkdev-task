import { Component } from '@angular/core';
import { HighlightsBannerComponent } from '../../components/highlights-banner/highlights-banner.component';
import { ThingsWeDoComponent } from '../../components/things-we-do/things-we-do.component';
import { LatestNewsComponent } from '../../components/latest-news/latest-news.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HighlightsBannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
