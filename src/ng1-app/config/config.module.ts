import * as angular from 'angular';
import { apiConfig } from './api.config';
import { deferInterceptConfig } from './defer-intercept.config';
import { routingConfig } from './routing.config';

export const configModule = angular.module('ng1App.config', [
  'restangular',
  'ui.router',
  'ui.router.upgrade',
])
  .config(apiConfig)
  .config(deferInterceptConfig)
  .config(routingConfig);
