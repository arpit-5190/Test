import { TestBed } from '@angular/core/testing';

import { DenoapiService } from './denoapi.service';

describe('DenoapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DenoapiService = TestBed.get(DenoapiService);
    expect(service).toBeTruthy();
  });
});
