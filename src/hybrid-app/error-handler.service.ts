import { Inject, ErrorHandler as _ErrorHandler, Injectable } from '@angular/core';


@Injectable()
export class ErrorHandlerService implements _ErrorHandler {
    private $exceptionHandlerService;
    constructor(
        @Inject('$injector') private $injector: any,
    ) {
        console.log('was instantiated');
        this.$exceptionHandlerService = this.$injector.get('ExceptionHandlerService');
    }

    public handleError(error: Error) {
        console.log('Called with error');
        this.$exceptionHandlerService.handleError(error);
    }
}
