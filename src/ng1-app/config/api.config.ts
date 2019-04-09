/**
 * configures http requests and interactions with the backend api
 */

/*@ngInject*/
export function apiConfig(
  $httpProvider: ng.IHttpProvider,
  RestangularProvider: Restangular.IProvider,
): void {
  $httpProvider.defaults.withCredentials = true;

  if ($httpProvider.defaults.headers) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }

  // REST API config
  RestangularProvider.setBaseUrl(`https://httpbin.org`);

  // NB: we must do dependency injection manually here to avoid circular dependencies
  $httpProvider.interceptors.push(($injector: ng.auto.IInjectorService, $q: ng.IQService) => {
    return {
      request: (config) => {
        return config;
      },
      responseError: (rejection: ng.IHttpResponse<any>) => {
// Only handle completely global errors here.
        // Any other specific errors should be handled in the respective scoped Restangular services
        // @TODO for now we have to handle the 403 token response here. Restangular seems to have a scoping bug
        if (rejection.status === 401) {
          // 401: User is not logged in
          const message = (rejection.data ? rejection.data.message : null) || 'Unauthorised';
          const error = new Error(message);

          return $q.reject(error);
        } else if (rejection.status === 403) {
          // 403: Unauthorised access (user not authorised or token not valid)
          // console.info('403 intercepted')
          const message = (rejection.data ? rejection.data.message : null) || 'Forbidden';
          const error = new Error(message);
          return $q.reject(error);

        } else if (rejection.status === 410) {
          // Handle 410 errors, which indicate an expired resource
          const message = (rejection.data ? rejection.data.message : null) || `Resource expired (410)`;
          const error = new Error(message);

          return $q.reject(error);
        } else if (rejection.status === 429) {
          // Handle 429 errors, which indicate too many requests
          const message = (rejection.data ? rejection.data.message : null) || `Too many requests (429)`;
          const error = new Error(message);

          return $q.reject(error);
        } else if (rejection.status && rejection.status >= 500 && rejection.status < 600) {
          // 5xx: Server errors
          const message = (rejection.data ? rejection.data.message : null) || `Server Error (${rejection.status})`;
          const error = new Error(message);

          return $q.reject(error);
        } else {
          // reject normally
          return $q.reject(rejection);
        }      },
    } as ng.IHttpInterceptor;
  });
}
