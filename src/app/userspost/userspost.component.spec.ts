import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspostComponent } from './userspost.component';

describe('UserspostComponent', () => {
  let component: UserspostComponent;
  let fixture: ComponentFixture<UserspostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
