import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import {NgbAlertModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgIconsModule} from "@ng-icons/core";
import {
  tablerBrandLinkedin,
  tablerBrandFacebook,
  tablerBrandTelegram,
  tablerBrandGithub,
  tablerHeart,
  tablerArrowRight} from '@ng-icons/tabler-icons';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgIconsModule.withIcons({
      tablerBrandLinkedin,
      tablerBrandFacebook,
      tablerBrandTelegram,
      tablerBrandGithub,
      tablerHeart,
      tablerArrowRight,
    }),
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
