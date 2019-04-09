/**
 * configures states and routing (ui-router)
 */

import {
  HookResult,
  StateObject,
  StateProvider,
  Transition,
  TransitionService,
  UrlService,
} from '@uirouter/angularjs';


/*@ngInject*/
export function routingConfig(
  $locationProvider: ng.ILocationProvider,
  $stateProvider: StateProvider,
  $urlServiceProvider: UrlService,
  $transitionsProvider: TransitionService,
  $windowProvider: any,
): void {
  $stateProvider.state({
    name: 'home',
    url: '',
    component: 'homeComponent',
  });
}
