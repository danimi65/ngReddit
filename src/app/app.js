'use strict';

import angular from 'angular';
import { DefaultState, DefaultCtrl } from './default';
import * as uiRouter from 'angular-ui-router';


console.log(DefaultState);


import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    // controller: 'AppCtrl',
    // controllerAs: 'app'
  }
};

// class AppCtrl {
//   constructor() {
//     this.url = 'https://github.com/preboot/angular-webpack';
//   }
// }

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, ['ui.router'])
  .config(($stateProvider) =>{
    $stateProvider
      .state(DefaultState.name, DefaultState);
  })
  .run(($state) =>{
    $state.go('default');
  })
  .directive('app', app)
  .controller(DefaultState.controller, DefaultCtrl);

export default MODULE_NAME;