import { slideUp, slideRight, slideDown, fade } from '../animations';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../app/config.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations: [ slideUp, slideRight, slideDown, fade ]
})
export class HeaderComponent implements OnInit {
  currentRoute:string;
  showMenu:boolean;

  options = [
    {
      label: 'Reflexology',
      route: '/about-reflexology'
    },
    {
      label: 'Maternity',
      route: '/maternity'
    },
    {
      label: 'What to expect',
      route: '/what-to-expect'
    },
    {
      label: 'Pricing',
      route: '/pricing-offers'
    },
    {
      label: 'About me',
      route: '/about-me'
    },
    {
      label: 'Contact',
      route: '/contact'
    },
  ];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.config.currentRoute.subscribe(url => this.currentRoute = url);
    this.config.currentShowMenu.subscribe(show => this.showMenu = show);
  }

  toggle(show){
    this.config.toggleMenu(show);
  }
}
