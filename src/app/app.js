'use strict';

import angular from 'angular';
import { DefaultState, DefaultCtrl } from './default';
import * as uiRouter from 'angular-ui-router';
import { AwwState, AwwCtrl, AwwServiceName, AwwService } from './aww';
import { ProgState, ProgCtrl, ProgServiceName, ProgService} from './programmerhumor';
import {ThumbName} from './thumb';


console.log('aww', AwwState);
console.log(DefaultState);
console.log('programmerhumor', ProgState);


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
      .state(DefaultState.name, DefaultState)
      .state(AwwState.name, AwwState)
      .state(ProgState.name, ProgState);
  })
  .run(($state) =>{
    $state.go('default');
  })
  .directive('app', app)
  .directive('thumb', ThumbName)
  .service(AwwServiceName, AwwService)
  .service(ProgServiceName, ProgService)
  .controller(DefaultState.controller, DefaultCtrl)
  .controller(AwwState.controller, AwwCtrl)
  .controller(ProgState.controller, ProgCtrl);

export default MODULE_NAME;