import { slideInAnimation } from './animations';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { ConfigService } from '../app/config.service';

@Component({
  selector: '#root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [ slideInAnimation ]
})
export class AppComponent implements OnInit {
  route:string;

  constructor(private config: ConfigService, private router: Router) {
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.config.setRoute(val.url);
        this.config.toggleMenu(false);
      }
    });
  }

  ngOnInit() {
    this.config.currentRoute.subscribe(url => this.route = url.slice(1));
  }
}
