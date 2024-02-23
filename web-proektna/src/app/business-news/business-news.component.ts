import { Component,Input } from '@angular/core';
import { News } from '../module/klasa';
import { NEWS } from '../../db-data';
import { NgClass,NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-business-news',
  standalone: true,
  imports: [NgClass,NgFor,NgIf],
  templateUrl: './business-news.component.html',
  styleUrl: './business-news.component.css'
})
export class BusinessNewsComponent {

  @Input()
  bussNews : News[] = [];

  scrollNews() {
    const container = document.querySelector('.buss-news-container');
    if (container) {
      container.scrollBy({ left: 350, behavior: 'smooth' }); 
    }
  }

  ngOnInit():void {
    this.bussNews = NEWS.filter((newsItem : News) => newsItem.category === "Business");
  }

}
