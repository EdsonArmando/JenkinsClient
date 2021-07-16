import { TestBed } from '@angular/core/testing';

import { APIPersonaService } from './apipersona.service';

describe('APIPersonaService', () => {
  let service: APIPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
