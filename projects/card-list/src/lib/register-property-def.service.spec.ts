import { TestBed } from '@angular/core/testing';

import { RegisterPropertyDefService } from './register-property-def.service';

describe('RegisterPropertyDefService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegisterPropertyDefService = TestBed.get(RegisterPropertyDefService);
    expect(service).toBeTruthy();
  });
});
