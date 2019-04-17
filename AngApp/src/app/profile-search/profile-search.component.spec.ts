import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSearchComponent } from './profile-search.component';

describe('ProfileSearchComponent', () => {
  let component: ProfileSearchComponent;
  let fixture: ComponentFixture<ProfileSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
