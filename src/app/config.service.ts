import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

function _window() : any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private route = new BehaviorSubject('/');
  private showMenu = new BehaviorSubject(false);
  currentRoute = this.route.asObservable();
  currentShowMenu = this.showMenu.asObservable();

  get nativeWindow() : any {
    return _window();
  }

  constructor() { }

  setRoute(url: string) {
    this.route.next(url);
  }

  toggleMenu(show: boolean) {
    this.showMenu.next(show);
  }
}
