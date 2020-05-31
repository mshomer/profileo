import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ContactInfo } from './contact-info.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {
  @Input('triggerAnimation') triggerAnimation: boolean;

  contactInfo: ContactInfo[] = [
    { name: 'Address', icon: 'fa fa-map-marker-alt', value: 'Kiryat Ono' },
    {
      name: 'Phone Number',
      icon: 'fa fa-phone',
      link: { text: '050-6960747', value: 'tel:0506960747' },
    },
    {
      name: 'Email Address',
      icon: 'fa fa-paper-plane',
      link: { text: 'Send', value: 'email:mshomer@gmail.com' },
    },
    {
      name: 'Linkedin',
      icon: 'fab fa-linkedin-in',
      link: {
        text: 'Connect',
        value: 'https://il.linkedin.com/in/matan-shomer-55818b72',
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.triggerAnimation = false;
  }
}
