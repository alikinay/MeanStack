import { Component, OnInit } from '@angular/core';
import { Profile } from '../profile';
import { ProfileService} from '../profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: Profile[];


  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.getProfiles();
  }

  getProfiles(): void {
    this.profileService.getProfiles()
      .subscribe(profiles => this.profiles = profiles);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.profileService.addProfile({ name } as Profile)
      .subscribe(profile => {
        this.profiles.push(profile);
      });
  }

  delete(profile: Profile): void {
    this.profiles = this.profiles.filter(p => p !== profile);
    this.profileService.deleteProfile(profile).subscribe();
  }


}
