import { slideDown, slideInAnimation } from './animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ConfigService } from '../app/config.service';

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

  constructor(private config: ConfigService, private router: Router, private renderer: Renderer2) {
    router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.config.setRoute(event.url);
        this.config.toggleMenu(false);

        this.renderer.removeClass(document.body, (this.previousUrl ? this.previousUrl : 'home'));
        let currentUrlSlug = event.url.slice(1)
        this.renderer.addClass(document.body, (currentUrlSlug ? currentUrlSlug : 'home'));
        this.previousUrl = currentUrlSlug;
        console.log(currentUrlSlug);
        this.scrolledBottom = currentUrlSlug == '' ? true : false;
      }
    });

    this.dev = config.nativeWindow.location.hostname == 'localhost';
  }

  ngOnInit() {
    this.config.currentRoute.subscribe(url => this.route = url.slice(1) ? url.slice(1) : 'home');
  }

  onScroll(e){
    this.scrolledDown = e.target.scrollTop >= 10;
    this.scrolledBottom = (e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 10;
  };
}
