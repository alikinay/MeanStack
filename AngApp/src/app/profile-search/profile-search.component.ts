import { Component, OnInit } from '@angular/core';

import {Observable, Subject} from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';


import {Profile} from '../profile';
import {ProfileService} from '../profile.service';


@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrls: ['./profile-search.component.css']
})
export class ProfileSearchComponent implements OnInit {
  profiles$: Observable<Profile[]>;
  private searchTerms = new Subject<string>();

  constructor(private profileService: ProfileService) {}
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.profiles$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.profileService.searchProfiles(term)),
    );
  }

}
