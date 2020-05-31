import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import {
  map,
  startWith,
  repeat,
  take,
  tap,
  switchMap,
  delay,
} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  role$: Observable<string>;

  private roles: string[] = [
    'Front End Developer',
    '.Net C# Developer',
    'Computer Technician',
    'Full Stack Developer',
  ];

  constructor() {}

  ngOnInit(): void {
    this.role$ = interval(4200).pipe(
      startWith(this.roles.length - 1),
      take(this.roles.length + 1),
      repeat(),
      switchMap((i) => {
        return interval(130).pipe(
          take(this.roles[i].length + 1),
          map((j) => this.roles[i].slice(0, j))
        );
      })
    );
  }
}
