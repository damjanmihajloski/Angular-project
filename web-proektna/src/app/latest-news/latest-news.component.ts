import { Component,OnInit,Input} from '@angular/core';
import { NgClass,NgFor,NgIf } from '@angular/common';
import { NEWS } from '../../db-data';
import { News } from '../module/klasa';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [NgFor,CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.css'
})
export class LatestNewsComponent {
  
  @Input()
  topNews: News[] = [];

  ngOnInit(): void {
    this.topNews = NEWS.sort((a:News, b:News) => new Date(b.date).getTime() - new Date(a.date).getTime()) // Sort news by date, descending
      .slice(0, 5);
  }



}
