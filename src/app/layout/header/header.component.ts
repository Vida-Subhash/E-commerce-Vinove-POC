import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn!: boolean;
  @Input() public parentData: number | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!localStorage.getItem('tocken');
  }
  logOut() {
      this.router.navigateByUrl('signin');
  }

}
