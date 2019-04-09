import { UrlService } from '@uirouter/angularjs';
/**
 * Tell UI-Router that it should wait until all bootstrapping is complete before
 * doing the initial URL synchronization.
 */

/*@ngInject*/
export function deferInterceptConfig(
  $urlServiceProvider: UrlService,
): void {
  $urlServiceProvider.deferIntercept();
}
