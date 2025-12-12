import { Component } from '@angular/core';
import { Article } from '../../shared/types';
import { Nav } from '../nav/nav';

@Component({
  selector: 'app-articles',
  imports: [Nav],
  templateUrl: './articles.html',
  styleUrl: './articles.css',
})
export class Articles {
  Articles: Article[] = [
    {
      Heading: 'Global Health Organization Declares New Viral Strain Contained',
      SubHeading: 'Rapid deployment of new diagnostic kits credited with preventing widespread community transmission in key global hubs.',
      ImageUrl: '/assets/images/health/viral_containment_chart.jpg',
      ArticleUrl: '/news/health/viral-strain-contained-nov2025',
    },
  ];

}
