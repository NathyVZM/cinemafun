import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { apiConfigurationResolver } from './api-configuration.resolver';

describe('apiConfigurationResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => apiConfigurationResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
