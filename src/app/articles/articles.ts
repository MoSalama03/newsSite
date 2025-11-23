import { Component } from '@angular/core';
import { Article } from '../../shared/types';

@Component({
  selector: 'app-articles',
  imports: [],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  Articles: Article[] = [
    {
      Heading: 'Breaking News: Major Event Unfolds',
      SubHeading: 'Details about the major event that has just occurred.',
      ImageUrl: 'assets/images/article1.jpg',
      ArticleUrl: 'https://newswebsite.com/article1',
    },
  ];

}
