import { AuthService } from 'src/app/fb/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any = null;
  constructor(private authService: AuthService, private router: Router) {}

  logout(){
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.authService.authState$.subscribe((userData) => {
      this.user = userData;
    });
  }
}
