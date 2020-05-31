import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('*', style({ opacity: 0, transform: 'translateY(-40px)' })),
      state('show', style({ opacity: 1, transform: 'translateY(0px)' })),
      state('hide', style({ opacity: 0, transform: 'translateY(-40px)' })),

      transition('* => hide', [animate(1400)]),
      transition('* => show', [animate(1400)]),
    ]),
  ],
})
export class AboutComponent implements OnInit {
  @Input('triggerAnimation') triggerAnimation: boolean;

  constructor() {}

  ngOnInit(): void {
    this.triggerAnimation = false;
  }
}
