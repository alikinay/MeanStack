import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  profiles: Profile[] = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles.slice(1, 5));
  }
}
