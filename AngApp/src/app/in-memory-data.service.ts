import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Profile} from './profile';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const profiles = [
      { id: 11, name: 'Ali' },
      { id: 12, name: 'Ela' },
      { id: 13, name: 'Fikri' },
      { id: 14, name: 'Turkan' },
      { id: 15, name: 'Semahat' },
      { id: 16, name: 'Omer' },
      { id: 17, name: 'Maya' },
      { id: 18, name: 'Zeynep' },
      { id: 19, name: 'Rail' },
      { id: 20, name: 'Mithat' }
    ];
    return {profiles};

  }
  genId(profiles: Profile[]): number {
    return profiles.length > 0 ? Math.max(...profiles.map(profile => profile.id)) + 1 : 11;
  }

}
