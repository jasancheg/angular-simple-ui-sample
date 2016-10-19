/**
 * @ngdoc controller
 * @name app.components.news.controller:NewsListCtrl
 * @requires logger
 * @description Controller of the app
 */

(function() {
  'use strict';

  angular
    .module('app.components.news')
    .controller('NewsListCtrl', NewsListCtrl);

  /* @ngInject */
  function NewsListCtrl($log) {

    var vm = this;

    activate();
    ///////////

    function activate() {
      $log.info('Activated Add News View', { vm: vm });
    }
  }
})();
