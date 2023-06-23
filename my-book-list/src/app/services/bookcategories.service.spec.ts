import { TestBed } from '@angular/core/testing';

import { BookcategoriesService } from './bookcategories.service';

describe('BookcategoriesService', () => {
  let service: BookcategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookcategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
