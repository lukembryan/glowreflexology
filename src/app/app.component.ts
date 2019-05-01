import { slideDown, slideInAnimation } from './animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ConfigService } from '../app/config.service';

declare let gtag: Function;

@Component({
  selector: '#root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [ slideDown, slideInAnimation ]
})
export class AppComponent implements OnInit {
  route:string;
  host:string;
  scrolledDown:boolean;
  scrolledBottom:boolean;
  dev:boolean;
  previousUrl:string;

  constructor(private config: ConfigService, private router: Router, private renderer: Renderer2, private titleService: Title) {
    this.dev =  ['localhost', 'local.glowreflexology.co.uk'].indexOf(config.nativeWindow.location.hostname) >= 0;

    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.config.setRoute(event.url);
        this.config.toggleMenu(false);

        this.renderer.removeClass(document.body, this.previousUrl);

        let currentUrlSlug = event.url.slice(1) ? event.url.slice(1) : 'home';

        this.renderer.addClass(document.body, currentUrlSlug);
        this.previousUrl = currentUrlSlug;

        this.scrolledBottom = currentUrlSlug == 'home' ? true : false;

        if(this.dev){
          gtag('config', 'UA-20448588-9', {
            'page_title' : currentUrlSlug.replace(/\-/g, ' ') + ' - glow reflexology',
            'page_path': event.urlAfterRedirects
          });
        }
      }
    });
  }

  ngOnInit(){
    this.config.currentRoute.subscribe(url => {
      this.route = url.slice(1) ? url.slice(1) : 'home';
      this.setTitle(this.route.replace(/\-/g, ' ') + ' - glow reflexology');
    });
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  onScroll(e){
    this.scrolledDown = e.target.scrollTop >= 10;
    if(this.route == 'home') this.scrolledBottom = true;
    else this.scrolledBottom = (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 10;
  };

  onActivate(e){
    let template = document.querySelector('#template');
    template.scrollTo(0,0);
  }
}
