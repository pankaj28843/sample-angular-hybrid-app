
/*@ngInject*/
class HomeCtrl implements ng.IOnInit {
  constructor(
    private $scope: ng.IScope,
    private Restangular: Restangular.IService,
  ) {}

  public $onInit() {
    this.Restangular
    .one('status/403')
    .get(console.log)
    .catch((error) => {
      // console.log('got 403', error);
    });
  }
}


export class HomeComponent implements ng.IComponentOptions {
  public bindings: {[boundProperty: string]: string};
  public template: string;
  public controller: ng.IControllerConstructor;

  constructor() {
    this.bindings = { };
    this.controller = HomeCtrl;
    this.template = `
      <h1>Hello</h1>
    `;
  }
}
