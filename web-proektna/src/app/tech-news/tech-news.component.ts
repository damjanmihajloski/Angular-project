import { Component, Input} from '@angular/core';
import { NgClass,NgIf,NgFor } from '@angular/common';
import { News } from '../module/klasa';
import { NEWS } from '../../db-data';


@Component({
  selector: 'app-tech-news',
  standalone: true,
  imports: [NgClass,NgIf,NgFor],
  templateUrl: './tech-news.component.html',
  styleUrl: './tech-news.component.css'
})
export class TechNewsComponent {
  @Input()
  techNews: News[] = [];
  scrollNews() {
    const container = document.querySelector('.tech-news-container');
    if (container) {
      container.scrollBy({ left: 350, behavior: 'smooth' }); 
    }
  }

  ngOnInit(): void {
    this.techNews = NEWS.filter((newsItem: News) => newsItem.category === "Technology");
}

}
