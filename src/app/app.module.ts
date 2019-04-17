import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutReflexologyComponent } from './about-reflexology/about-reflexology.component';
import { WhatToExpectComponent } from './what-to-expect/what-to-expect.component';
import { PricingOffersComponent } from './pricing-offers/pricing-offers.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent,
    AboutReflexologyComponent,
    WhatToExpectComponent,
    PricingOffersComponent,
    AboutMeComponent,
    ContactComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        data: { animation: 'HomePage' }
      },
      {
        path: 'about-reflexology',
        component: AboutReflexologyComponent,
        data: { animation: 'AboutReflexologyPage' }
      },
      {
        path: 'what-to-expect',
        component: WhatToExpectComponent
      },
      {
        path: 'pricing-offers',
        component: PricingOffersComponent
      },
      {
        path: 'about-me',
        component: AboutMeComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
