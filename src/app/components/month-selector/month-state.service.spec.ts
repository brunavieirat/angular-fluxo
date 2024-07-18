import { TestBed } from '@angular/core/testing';

import { MonthStateService } from './month-state.service';

describe('MonthStateService', () => {
  let service: MonthStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
