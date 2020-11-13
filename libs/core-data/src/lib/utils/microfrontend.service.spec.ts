import { TestBed } from '@angular/core/testing';

import { MicrofrontendService } from './microfrontend.service';

describe('MicrofrontendService', () => {
  let service: MicrofrontendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrofrontendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
