// We need to import `vendor` before everything else. This will ensure our CSS overrides work as expected.
import './vendor';

// import our additional modules
import { downgradedNg2Module } from '../hybrid-app/downgraded-module';
// needs to be imported after the downgraded module, otherwise, `@angular/compiler` fails miserably
import '@uirouter/angular-hybrid';


import { run } from './run';
import { HomeComponent } from './features/home/home.component';
import { configModule } from './config/config.module';
import { ExceptionHandlerService } from './errors/exception-handler.service';
import { ExceptionHandler } from './errors/exception-handler';

declare const angular: ng.IAngularStatic;

const dependencies = [
  configModule.name,
  'restangular',
  downgradedNg2Module.name,
];

angular.module('ng1App', dependencies);

angular.module('ng1App')
  .component('homeComponent', new HomeComponent())
  .service('ExceptionHandlerService', ExceptionHandlerService)
  .factory('$exceptionHandler', ExceptionHandler);

angular.module('ng1App')
  .run(run);
