import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, Title } from '@angular/platform-browser';
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
import { FooterComponent } from './footer/footer.component';
import { CodeOfEthicsComponent } from './code-of-ethics/code-of-ethics.component';
import { DataProtectionPolicyComponent } from './data-protection-policy/data-protection-policy.component';
import { MaternityComponent } from './maternity/maternity.component';

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
    HeaderComponent,
    FooterComponent,
    CodeOfEthicsComponent,
    DataProtectionPolicyComponent,
    MaternityComponent
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
        path: 'maternity',
        component: MaternityComponent
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
        path: 'data-protection-policy',
        component: DataProtectionPolicyComponent
      },
      {
        path: 'code-of-ethics',
        component: CodeOfEthicsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
