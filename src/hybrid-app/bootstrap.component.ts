import { Component, Inject, OnInit } from '@angular/core';
import { UrlService } from '@uirouter/core';

@Component({
  selector: 'app-bootstrap',
  template: `<h3>I am angular 7</h3>`,
  styles: []
})
export class BootstrapComponent implements OnInit {
  constructor(
    @Inject('$injector') private $injector: any,
  ) {
    const urlService: UrlService = this.$injector.get('$urlService');
    // setTimeout needed to allow angular routes to initialize after refresh
    urlService.listen();
    urlService.sync();
  }

  public ngOnInit() {
    setTimeout(() => {
      throw new Error('I dont like this');
    }, 200);
  }


}


