import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  public toggled: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public toggleChange(toggled: boolean) {
    this.toggled = toggled;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/account/login']);
  }

}
