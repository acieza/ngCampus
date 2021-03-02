import { TestBed } from '@angular/core/testing';

import { SclasesService } from './sclases.service';

describe('SclasesService', () => {
  let service: SclasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SclasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
