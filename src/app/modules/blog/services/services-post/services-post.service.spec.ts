import { TestBed } from '@angular/core/testing';

import { ServicesPostService } from './services-post.service';

describe('ServicesPostService', () => {
  let service: ServicesPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
