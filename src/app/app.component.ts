import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import {AuthService} from './user/auth.service';

@Component({
  selector: 'app-frontend-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fashion Trends Frontend';
  loading = true;

  constructor(private router: Router,public authService: AuthService) {
    router.events.subscribe((routerEvent: Event) => {
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent: Event): void {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }


}
