import { StaticProvider, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeComponent, downgradeModule, setAngularJSGlobal } from '@angular/upgrade/static';
import * as angular from 'angular';
import { BootstrapComponent } from './bootstrap.component';
import { HybridAppModule } from './hybrid-app.module';

const bootstrapFn = (extraProviders: StaticProvider[]) => {
  setAngularJSGlobal(angular);
  const platformRef = platformBrowserDynamic(extraProviders);
  const ngZone = new NgZone({enableLongStackTrace: true});
  return platformRef.bootstrapModule(HybridAppModule, {ngZone});
};


export const downgradedNg2Module = angular
  .module('downgradedNg2Module', [downgradeModule(bootstrapFn)])
  .directive('ng2Bootstrap', downgradeComponent({component: BootstrapComponent}));
