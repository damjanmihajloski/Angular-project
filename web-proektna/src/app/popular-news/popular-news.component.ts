import { Component,Input, Output ,OnInit} from '@angular/core';
import { News } from '../module/klasa';
import { NgClass,NgFor,NgIf } from '@angular/common';
import { NEWS } from '../../db-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popular-news',
  standalone: true,
  imports: [CommonModule,NgFor,NgIf,NgClass],
  templateUrl: './popular-news.component.html',
  styleUrl: './popular-news.component.css'
})
export class PopularNewsComponent implements OnInit{
  @Input()
  news: News[] = [];
  news2 : News[] = [];
  news3 : News[] = [];
  
  constructor(){}

  ngOnInit(): void {
      this.news = NEWS.filter((newsItem : News) => newsItem.priority === 1);
      this.news2 =  NEWS.filter((newsItem1: News)=> newsItem1.priority === 2);
      this.news3 = NEWS.filter((newsItem2 : News)=> newsItem2.priority === 3);
  }

}
