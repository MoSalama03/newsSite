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
    {
      Heading: 'Breakthrough in Renewable Energy: Fusion Reactor Achieves Net Positive Output',
      SubHeading: 'Scientists celebrate as the latest fusion reactor design sustains energy production beyond input levels for the first time.',
      ImageUrl: '/assets/images/energy/fusion_reactor.jpg',
      ArticleUrl: '/news/energy/fusion-reactor-breakthrough-nov2025',
    },
  ];

}
