/**
 * Exception Service
 *
 * Handles errors that occur in the app (use to overwrite default handler)
 *
 * NB: in angular 1.5 this exception handler is explicitely called when an error
 * is thrown inside a promise, regardless of if it's getting caught. In angular 1.6 they fix
 * this and only reject the promise rather than calling this exception handler.
 */

import { StateService } from '@uirouter/angularjs';


interface IDialogSettings {
  title: string;
  textContent: string;
  ok?: string;
}

/*@ngInject*/
export class ExceptionHandlerService {

  private isErrorDisplayed = false;

  constructor(
    private $state: StateService,
    private $q: ng.IQService,
  ) { }

  public handleError(exception: Error): void {

    console.log({
      title: 'Error',
      textContent: exception.message,
      ok: 'Close',
    });
  }
}
