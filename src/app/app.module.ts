import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NavigationModule } from './navigation/navigation.module';
import { ScrollToService } from './services/scroll-to.service';
import { WindowScrollDirective } from './directives/window-scroll.directive';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './resume/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    WindowScrollDirective,
    FooterComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    NavigationModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
  ],
  providers: [ScrollToService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
