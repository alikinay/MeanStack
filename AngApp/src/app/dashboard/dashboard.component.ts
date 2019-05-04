import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';
import {LoginService} from '../login.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  profiles: Profile[] = [];
  username;

  constructor(private profileService: ProfileService, private loginService: LoginService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.getProfiles();
    this.getLoginInfo();
    this.username = this.route.snapshot.paramMap.get('username');

  }

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles.slice(1, 5));
  }

  getLoginInfo(): void {
    this.loginService.getLoginInfo()
      .subscribe(username => this.username = username);
  }

  redirectNode() {
    window.location.href = 'http://localhost:3000/' ;
  }
}

