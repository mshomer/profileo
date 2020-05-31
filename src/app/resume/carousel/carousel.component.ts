import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/projects/project.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input('projects') projects: Project[];

  currentPage = 0;

  constructor() {}

  ngOnInit(): void {}
}
