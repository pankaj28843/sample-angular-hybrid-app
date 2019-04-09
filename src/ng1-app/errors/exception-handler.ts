/**
 * Exception Handler
 *
 * Handles errors that occur in the app (use to overwrite default handler)
 *
 * NB: in angular 1.5 this exception handler is explicitely called when an error
 * is thrown inside a promise, regardless of if it's getting caught. In angular 1.6 they fix
 * this and only reject the promise rather than calling this exception handler.
 */

import { ExceptionHandlerService } from './exception-handler.service';

/*@ngInject*/
export function ExceptionHandler(
  $log: ng.ILogService,
  $injector: ng.auto.IInjectorService,  // have to inject manually, because of circular dependencies with mdDialog
): ng.IExceptionHandlerService {
  return (exception: Error, cause: any) => {
    $log.error(exception, cause);

    const service = $injector.get<ExceptionHandlerService>('ExceptionHandlerService');
    service.handleError(exception);
  };
}
