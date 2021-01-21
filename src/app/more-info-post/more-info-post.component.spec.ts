import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreInfoPostComponent } from './more-info-post.component';

describe('MoreInfoPostComponent', () => {
  let component: MoreInfoPostComponent;
  let fixture: ComponentFixture<MoreInfoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreInfoPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreInfoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
