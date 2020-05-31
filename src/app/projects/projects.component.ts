import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({ opacity: 0 })),
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),

      transition('* => hide', [animate(1800)]),
      transition('* => show', [animate(1800)]),
    ]),
  ],
})
export class ProjectsComponent implements OnInit {
  @Input('triggerAnimation') triggerAnimation: boolean;
  @Input('projects') projects: Project[];

  constructor() {}

  ngOnInit(): void {
    this.triggerAnimation = false;
  }
}
