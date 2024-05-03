import { CanMatchFn } from '@angular/router';

export const noAuthGuard: CanMatchFn = (route, segments) => {
  return true;
};
