import { Component, OnInit} from '@angular/core';
import { Profile} from '../profile';

import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {ProfileService} from '../profile.service';


@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})

export class ProfileDetailComponent implements OnInit {
  profile: Profile;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.profileService.getProfile(id)
      .subscribe(profile => this.profile = profile);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.profileService.updateProfile(this.profile)
      .subscribe(() => this.goBack());
  }

}
