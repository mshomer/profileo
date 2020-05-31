import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NavItem } from './navigation/nav-item.model';
import { ChangeDetectorRef } from '@angular/core';
import { Project } from './projects/project.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('home') home: ElementRef;
  @ViewChild('about') about: ElementRef;
  @ViewChild('resume') resume: ElementRef;
  @ViewChild('projects') projects: ElementRef;
  @ViewChild('contact') contact: ElementRef;

  public navItems: NavItem[] = null;

  public projectList: Project[] = [
    {
      name: 'Covid 19 App',
      imageUrl: '/assets/covid-19-app.png',
      description: `
      In this app, I created a COVID-19 Tracker/Stats Application. This app uses Angular with the addition of highcharts, Material UI, ngrx Store and many different modules.
      The cards displaying the statistics as well as ChartsThe will be fetched from a Live API data.
      I copied the UI and the idea from a youtube video "Build a COVID-19 Tracker Application - React JS Project"`,
      link: 'https://covid-19-tracker-b15ec.web.app/',
      github: 'https://github.com/mshomer/covid-19-tracker',
      video: 'https://www.youtube.com/watch?v=khJlrj3Y6Ls&t=203s',
    },
    {
      name: 'Wiki Store App',
      imageUrl: '/assets/wiki-store-app.jpg',
      description: `
      In this app, I created a Wiki Web Store Application. This app uses Angular with the addition of Ionic Framework.
      Wiki Store is a collections of plants and flowers that gives the user information how to take care of indoor and outdoor plants, getting them enough water and sunlight every day.
      You can search / filter and even take a picture of a specific plant and our 'magic' will find the correct plant for you.`,
      link: 'https://ionic-wiki-store-app.web.app/',
      download:
        'https://drive.google.com/open?id=1IBdAkmdaOXy-idCFPx1gCwbe4xsrbJI7',
      github: 'https://github.com/mshomer/ionic-wiki-store-app',
    },
    {
      name: 'Sorting Visualizer',
      imageUrl: '/assets/sorting-visualizer-app.png',
      description:
        'This is a Sorting Visualizer project created with Angular framework, which visualizes the Merge Sort algorithm, Heap Sort algorithm, Bubble Sort algorithm and Quick Sort algorithm.',
      link: 'https://sorting-visualizer-7e0bb.web.app/',
      github: 'https://github.com/mshomer/sorting-visualizer',
    },
    {
      name: 'To-Do App',
      imageUrl: '/assets/todo-app.png',
      description: `
      This is a simaple RESTful API project with .Net Core 3.1 framework. I started by building a simaple to-do database driven application
      using the ORM object relational mapper. It works by mapping the properties of a plain JavaScript object called model to an actual database table.
      I used migrations that helped me keep my schemas under version control.
      I built relationships for one-to-one, one-to-many, many-to-many.
      After my database initalized I started focus on building the RESTful APIs for the to-do application.
      Finally, I implemented ASP.NET core identity to authenticate the users with a valid token.`,
      github: 'https://github.com/mshomer/.net-todo-app',
    },
    {
      name: 'MVC Garage Store',
      imageUrl: '/assets/mvc-garage-store.png',
      description: `
      This is a simaple MVC project for Garage Store of vehicles.
      In this project an anonymous user can view a collection of vehicles and decides if he would like to rent one, inorder to rent a vehicle the user first
      must to be logged in, by signing in with email and password or a Google accoount service.
      A signed in user can see is list of chosen vehicles in the Cart page and checkout/submit the order when he ready.
      `,
      github: 'https://github.com/mshomer/MVC-garage-store',
    },
  ];

  constructor(private cdref: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.navItems = [
      { name: 'Home', element: this.home.nativeElement.previousElementSibling },
      {
        name: 'About',
        element: this.about.nativeElement.previousElementSibling,
      },
      {
        name: 'Resume',
        element: this.resume.nativeElement.previousElementSibling,
      },
      {
        name: 'Projects',
        element: this.projects.nativeElement.previousElementSibling,
      },
      {
        name: 'Contact',
        element: this.contact.nativeElement.previousElementSibling,
      },
    ];

    this.cdref.detectChanges();
  }
}
