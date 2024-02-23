import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PopularNewsComponent } from './popular-news/popular-news.component';
import { NEWS } from '../db-data';
import { NgClass,NgFor,NgIf } from '@angular/common';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { FooterComponent } from './footer/footer.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,PopularNewsComponent,TechNewsComponent,BusinessNewsComponent,FooterComponent,LatestNewsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'web-proektna';

  newss = NEWS;
}
