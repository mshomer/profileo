import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { NavItem } from '../navigation/nav-item.model';
import { ScrollToService } from '../services/scroll-to.service';
import { Project } from '../projects/project.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
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
export class FooterComponent implements OnInit {
  @Input('triggerAnimation') triggerAnimation: boolean;

  @Input('navItems') navItems: NavItem[];
  @Input('projects') projects: Project[];

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {
    this.triggerAnimation = false;
  }

  scrollToElement(element): void {
    this.scrollToService.scrollToElement(element);
  }
}
