import { Component, OnInit, Input } from '@angular/core';
import { Skill } from './skill.model';
import { Observable, interval } from 'rxjs';
import { startWith, take, tap } from 'rxjs/operators';
import { ScrollToService } from '../services/scroll-to.service';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ResumeItem } from './resume-item.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
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
export class ResumeComponent implements OnInit {
  @Input('triggerAnimation') triggerAnimation: boolean;

  public educationList: ResumeItem[] = [
    {
      date: '2010-2013',
      title: 'Holon Institute of Technology',
      paragraphs: [
        {
          value:
            'Bachelor of Science (BSc), Computer Science - graduated in honors (90.6)',
        },
      ],
      projects: [
        {
          name: 'Flower Store Application',
          description:
            'Review the application at: http://hit.softwarelabs.org/?p=69',
          imageUrl: 'assets/Flower Store Application.png',
          link:
            'http://media.licdn.com/embeds/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FnBN237HmxhQ%3Ffeature%3Doembed&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DnBN237HmxhQ%26feature%3Dautoshare&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FnBN237HmxhQ%2Fhqdefault.jpg&amp;key=03fb819bf74246bf972444a07b738ad0&amp;type=text%2Fhtml&amp;schema=youtube',
          icon: 'fa fa-video',
        },
        {
          name: 'Facebook Features using Design Patterns v1',
          description:
            'Desgin Patterns: Observer, Strategy and Template Method.',
          imageUrl: 'assets/icon-no-image.svg',
          link:
            'https://drive.google.com/file/d/0B_IL7GgVeYnGTjFRUm9xMGFWX2s/view',
          icon: 'fa fa-link',
        },
        {
          name: 'Facebook Features using Design Patterns v2',
          description: 'Desgin Patterns: Buider, Abstract Factory and Adapter',
          imageUrl: 'assets/icon-no-image.svg',
          link:
            'https://drive.google.com/file/d/0B_IL7GgVeYnGUF81eEFKdWUxYjQ/view',
          icon: 'fa fa-link',
        },
        {
          name: 'Othello',
          description: `Developing a board game, Othello using .Net and C# technologies.
          This app can be played as a 2 player game or against a computer, furthermore a strategy of board size and computer logic level can be differ.`,
          imageUrl: 'assets/icon-no-image.svg',
          link:
            'https://drive.google.com/file/d/0B_IL7GgVeYnGcHJ3X0RvdzdneTg/view',
          icon: 'fa fa-link',
        },
      ],
    },
    {
      date: '2018',
      title: 'Yaniv Arad – Tech Training Labs',
      paragraphs: [
        {
          value: 'Angular 5, Extreme 70 model at Yaniv Arad tech training labs',
        },
      ],
    },
  ];

  public experienceList: ResumeItem[] = [
    {
      date: '2018-2020',
      title: 'Full-Stack Web Developer',
      subTitle:
        'OSR Enterprises AG, start-up company in the new mobility and autonomous driving field',
      paragraphs: [
        {
          value:
            'Developing and maintaining large scale Web applications with Angular5 language',
        },
        {
          value: 'Technologies:',
          paragraphs: [
            { value: '.NET core, mongo DB; server-side' },
            { value: 'JS, HTML, CSS, Bootstrap, Angular 5; client-side' },
            { value: 'GIT, JIRA, Confluence; tools' },
          ],
        },
      ],
    },
    {
      date: '2016-2018',
      title: 'Full-Stack Web Developer ',
      subTitle: 'KPMG, international accounting and financial services firm',
      paragraphs: [
        {
          value:
            'Developing and maintaining a large-scale Web application using the .NET framework',
        },
        {
          value: 'Technologies: ',
          paragraphs: [
            { value: 'Dapper, WebForms, ASP.NET, MVC; server-side.' },
            {
              value:
                'JS, HTML, CSS, JQuery, Bootstrap, Kendo (Telerik), Ajax; client-side',
            },
          ],
        },
        {
          value:
            'Working with MSSQL Database, developing; stored procedure, functions etc.',
        },
      ],
    },
    {
      date: '2014-2016',
      title: '.NET developer and systems analyzer',
      subTitle: 'K.B.I.S (Knowledge Based Information Systems) LTD',
      paragraphs: [
        { value: 'Developing and maintaining a large-scale Web application' },
        {
          value: 'Working with Oracle Database, developing PL-SQL code; SSRS',
        },
      ],
    },
    {
      date: '2013',
      title: 'Web Developer',
      subTitle: 'Dice Marketing- A social media and marketing agency.',
      paragraphs: [
        {
          value:
            'Developing web applications using Html, CSS, JavaScript, JQuery and PHP',
        },
        { value: 'Interfacing to Facebook API, Google API' },
      ],
    },
  ];

  public skills: Skill[] = [
    {
      name: 'Angular',
      value: 90,
    },
    {
      name: 'HTML',
      value: 80,
    },
    {
      name: 'CSS',
      value: 80,
    },
    {
      name: 'JS / JQuery',
      value: 80,
    },
    {
      name: 'C# .Net Core',
      value: 70,
    },
    {
      name: 'Bootstrap',
      value: 85,
    },
    {
      name: 'GIT',
      value: 70,
    },
    {
      name: 'JIRA',
      value: 80,
    },
    {
      name: 'Docker',
      value: 50,
    },
    {
      name: 'SQL Server',
      value: 80,
    },
    {
      name: 'MongoDB',
      value: 70,
    },
  ];

  public skillsAnimate: { name: string; value$: Observable<number> }[];

  constructor(private scrollToService: ScrollToService) {}

  ngOnInit(): void {
    this.triggerAnimation = false;
  }

  scrollToElement(element) {
    this.scrollToService.scrollToElement(element);
  }

  triggerSkillsAnimation(show: boolean) {
    if (show) {
      this.skillsAnimate = this.skills.map((skill) => {
        return {
          name: skill.name,
          value$: interval(5).pipe(startWith(0), take(skill.value + 2)),
        };
      });
    }
  }
}
