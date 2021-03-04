import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBlogsComponent } from './show-blogs.component';

describe('ShowBlogsComponent', () => {
  let component: ShowBlogsComponent;
  let fixture: ComponentFixture<ShowBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
