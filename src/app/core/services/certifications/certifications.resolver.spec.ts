import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { certificationsResolver } from './certifications.resolver';

describe('certificationsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => certificationsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
