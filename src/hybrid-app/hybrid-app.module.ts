import { CommonModule } from '@angular/common';
import { DoBootstrap, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { BootstrapComponent } from './bootstrap.component';
import { ErrorHandlerService } from './error-handler.service';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    // Provide angular upgrade capabilities
    UpgradeModule,
    UIRouterUpgradeModule.forRoot(),
  ],
  declarations: [BootstrapComponent],
  entryComponents: [BootstrapComponent],
  providers: [{provide: ErrorHandler, useClass: ErrorHandlerService, multi: false}],
  exports: []
})
export class HybridAppModule implements DoBootstrap {
  // Empty placeholder method to satisfy the `Compiler`.
  public ngDoBootstrap(): void {}
}
